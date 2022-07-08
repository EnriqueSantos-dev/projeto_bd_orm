import * as yup from 'yup';

export const formPaymentSchema = yup.object().shape({
  valueSupply: yup
    .number()
    .positive('O valor deve ser positivo')
    .required('É preciso passar o valor de abastecimento'),
  name: yup
    .string()
    .trim()
    .required('Preencha o campo')
    .min(2, 'Seu nome deve ter pelos menos 2 caracteres'),
  cpf: yup
    .string()
    .min(11, 'O seu cpf deve ter 11 digitos')
    .max(11, 'O seu cpf deve ter no máximo 11 digitos')
    .matches(/^\d{11}$/, 'Digite somente os dígitos do seu cpf')
    .required()
});
