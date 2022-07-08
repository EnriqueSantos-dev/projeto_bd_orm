import React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Input, variantInput } from '../InputForm';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLink } from '../ButtonLink';
import { colors } from '../../helpers/colorsBasic';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
  name: string;
  cpf: string;
  email: string;
};

const schemaForm = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      'Escreva um nome válido'
    )
    .required('Este campo é obrigatório'),
  cpf: yup
    .string()
    .min(11)
    .max(11)
    .matches(/^\d{11}$/, 'Digite apenas os dígitos do seu cpf')
    .required('Este campo é obrigatório'),
});

export const PersonalInfos = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    defaultValues: {
      cpf: '',
      name: '',
      email: '',
    },
    resolver: yupResolver(schemaForm),
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data, isValid);
    if (isValid) {
      navigate('/cadastro/success');
    }
  };

  const nextStepForm = () => {};

  return (
    <form className='flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex-1 flex-col flex gap-3'>
        <Controller
          name='name'
          control={control}
          render={({ field: { name, onChange }, fieldState: { error } }) => (
            <Input
              label='Nome'
              placeholder='Digite seu nome'
              type='text'
              error={error?.message}
              variant={variantInput.lightDark}
              onChange={onChange}
              children={<PersonIcon />}
              name={name}
            />
          )}
        />
        <Controller
          name='cpf'
          control={control}
          render={({ field: { name, onChange }, fieldState: { error } }) => (
            <Input
              label='CPF'
              placeholder='Digite seu CPF '
              type='text'
              error={error?.message}
              variant={variantInput.lightDark}
              onChange={onChange}
              children={<SecurityIcon />}
              name={name}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field: { name, onChange }, fieldState: { error } }) => (
            <Input
              label='Email'
              placeholder='Digite seu email '
              type='text'
              error={error?.message}
              variant={variantInput.lightDark}
              onChange={onChange}
              children={<SecurityIcon />}
              name={name}
            />
          )}
        />
      </div>
      <ButtonLink
        text='Voltar'
        color={colors.blueButton}
        onClick={nextStepForm}
      />
      <button className='flex items-center justify-center disabled:opacity-70 cursor-pointer  gap-2 rounded-md px-7 py-2 font-semibold text-base text-white capitalize hover:opacity-80 ease-linear transition-opacity '>
        Próximo
      </button>
    </form>
  );
};
