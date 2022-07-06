import { prisma, PrismaErros } from './prisma';
import express from 'express';

import { v4 as uuid } from 'uuid';

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/postos', async (req, res) => {
  try {
    const data = await prisma.posto.findMany();
    return res.status(200).json(data);
  } catch (error) {}
});

app.post('/cliente/pagamento', async (req, res) => {
  const { name, cpf, valueSupply, pickGasStation } = req.body;
  try {
    //create client
    const { idCliente } = await prisma.cliente.create({
      select: {
        idCliente: true
      },
      data: {
        nome: name,
        cpf
      }
    });

    //relation client/posto
    const createRelation = await prisma.posto_Abastecer_Cliente.create({
      data: {
        clienteId: idCliente,
        data: new Date(),
        postoId: pickGasStation,
        valor: valueSupply
      }
    });

    return res.status(201).json({
      create: true
    });
  } catch (error) {
    return res.send(error);
  }
});

app.get('/postos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const data = await prisma.posto.findUnique({
      include: {
        tipos_combustiveis: {
          select: {
            idTipo: true,
            nome: true,
            valor: true
          }
        }
      },
      where: {
        idPosto: id
      }
    });
    return res.status(200).json({ data });
  } catch (error) {}
});

app.post('/gerente/cadastro', async (req, res) => {
  const { nome, cpf, login, senha, email } = req.body;

  try {
    const data = await prisma.gerente.create({
      data: {
        nome,
        cpf,
        login,
        senha,
        email
      }
    });
    return res.status(201).json(data);
  } catch (error) {
    if (error instanceof PrismaErros) {
      return error.code === 'P2002'
        ? res.json('O cpf ou login já pertence a alguém')
        : res.json(error.meta);
    }
  }
});

app.post('/gerente/adim', async (req, res) => {
  const { id, nome, endereco, cnpj } = req.body;

  try {
    const data = await prisma.posto.create({
      data: {
        nome,
        cnpj,
        endereco,
        gerenteId: id
      }
    });
    return res.status(201).json({ DadosDoPosto: data });
  } catch (error) {
    return res.json(error);
  }
});

app.put('/gerente/perfil', async (req, res) => {
  const { id, novoNome, novoCPF } = req.body;

  try {
    const data = await prisma.gerente.update({
      select: {
        nome: true,
        cpf: true
      },
      where: {
        idGerente: id
      },
      data: {
        nome: novoNome,
        cpf: novoCPF
      }
    });
    return res.status(200).json({
      status: 'Dados alterados com sucesso',
      data: data
    });
  } catch (error) {
    if (res.statusCode === 2002) {
      return res.json('Esse cpf pertence a outra pessoa');
    }
  }
});

app.post('/gerente/create/combustivel', async (req, res) => {
  const { nome, valor, idPosto } = req.body;

  try {
    const data = await prisma.tipo_combustivel.create({
      select: { idTipo: true, nome: true, valor: true },
      data: { nome, valor: parseFloat(valor), postoIdPosto: idPosto }
    });
    return res.status(201).json(data);
  } catch (error) {
    if (error instanceof PrismaErros) {
      return error.code == 'P2002'
        ? res.json('Esse tipo  já existe no posto')
        : res.json(error.meta);
    }
    return res.json(error);
  }
});

app.post('/pagamento', async (req, res) => {
  const { idCliente, idPosto, valueAbastecimento } = req.body;
  try {
    await prisma.posto_Abastecer_Cliente.create({
      data: {
        clienteId: idCliente,
        postoId: idPosto,
        valor: valueAbastecimento,
        data: new Date()
      }
    });
    return res.status(200).json({ message: 'pagamento concluído' });
  } catch (error) {
    return res.json({
      error: error,
      message: 'Deu algum problema no pagamento'
    });
  }
});

app.post('/login', async (req, res) => {
  const { loginGerente, senhaGerente } = req.body;

  try {
    const data = await prisma.gerente.findUnique({
      select: {
        login: true,
        senha: true
      },
      where: {
        login: loginGerente
      }
    });
    if (data?.login === loginGerente && data?.senha === senhaGerente) {
      return res.json({
        aceito: true,
        token: uuid()
      });
    } else {
      return res.json({
        aceito: false,
        message: 'O usuário ou senha estão incorretos'
      });
    }
  } catch (error) {
    return (res.statusCode = 101);
  }
});

app.listen(3333, () => {
  console.log('http server running');
});
