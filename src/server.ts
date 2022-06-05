import { prisma, PrismaErros } from './prisma';
import express from 'express';

import { randomUUID } from 'crypto';

const app = express();
app.use(express.json());

app.get('/postos', async (req, res) => {
  try {
    const data = await prisma.posto.findMany();
    return res.status(200).json(data);
  } catch (error) {}
});

app.get('/postos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const data = await prisma.posto.findUnique({
      where: {
        idPosto: id,
      },
      select: {
        cnpj: true,
      },
    });
    return res.status(200).json({ data });
  } catch (error) {}
});

app.post('/gerente/create', async (req, res) => {
  const { nome, cpf, login, senha } = req.body;

  try {
    const data = await prisma.gerente.create({
      data: {
        nome,
        cpf,
        login,
        senha,
      },
    });
    return res.status(201).json(data);
  } catch (error) {
    if (error instanceof PrismaErros) {
      return res.json(error.meta);
    }
  }
});

app.put('/gerente/perfil', async (req, res) => {
  const { id, novoNome, novoCPF, imgProfile } = req.body;

  try {
    const data = await prisma.gerente.update({
      where: {
        idGerente: id,
      },
      data: {
        nome: novoNome,
        cpf: novoCPF,
      },
    });
    return res.status(200).json({
      status: 'Dados alterados com sucesso',
    });
  } catch (error) {
    if (res.statusCode === 2002) {
      return res.json('Esse cpf pertence a outra pessoa');
    }
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
        data: new Date(),
      },
    });
    return res.status(200);
  } catch (error) {
    return error;
  }
});

app.post('/login', async (req, res) => {
  const { loginGerente, senhaGerente } = req.body;

  try {
    const data = await prisma.gerente.findUnique({
      select: {
        login: true,
        senha: true,
      },
      where: {
        login: loginGerente,
      },
    });
    if (data?.login === loginGerente && data?.senha === senhaGerente) {
      return res.json({
        aceito: true,
        token: randomUUID(),
      });
    } else {
      return res.json({
        aceito: false,
        message: 'O usuário ou senha estão incorretos',
      });
    }
  } catch (error) {
    return (res.statusCode = 101);
  }
});

app.listen(3333, () => {
  console.log('http server running');
});
