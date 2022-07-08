import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ValidatorsFields = {
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
};

export const schemaLogin = yup.object().shape({
  name: yup
    .string()
    .required('Preencha o campo')
    .min(2, 'Seu nome deve ter pelos menos 2 caracteres'),
  password: yup
    .string()
    .matches(
      ValidatorsFields.PASSWORD,
      `Sua senha de começar com uma letra maiúscula ,
       pelo menos um número e 
       um caractere especial `
    )
    .required('Esse campo é obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Esse campo é obrigatório'),
});
