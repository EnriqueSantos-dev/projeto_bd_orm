import { Button } from '../../components/Button';
import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { colors } from '../../helpers/colorsBasic';
import PersonIcon from '@mui/icons-material/Person';

import { UserDetails } from '../../components/SignupForm/UserDetails';

import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { variantInput } from '../../components/InputForm/index';

import { Controller, useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../../components/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../components/SignupForm/schemaValidateLogin';

type FormInputs = {
  userName: string;
  password: string;
  confirmPassword: string;
};

export function SignUp() {
  const { handleSubmit, control } = useForm<FormInputs>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: FormInputs) => console.log(data.userName);

  return (
    <>
      <Header>
        <button className='group flex items-center ease-linear rounded-md px-4 py-2 font-semibold text-base text-white capitalize bg-brain-500'>
          Postos 50% é água
        </button>
        <Button
          color={colors.greenButton}
          text='colaborador'
          children={<PersonIcon />}
        />
      </Header>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col gap-10 py-8 px-5 bg-bgTheme-700 max-w-[600px] w-full mx-auto mt-10 rounded-md'>
          <h2 className='text-center font-semibold text-white text-xl'>
            Cadastro
          </h2>
          <form
            className='flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name='userName'
              render={({
                field: { name, onChange },
                fieldState: { error },
              }) => (
                <Input
                  onChange={onChange}
                  label='Usuário'
                  type='text'
                  placeholder='Digite seu username'
                  error={error?.message}
                  variant={variantInput.lightDark}
                  name={name}
                  children={<PersonIcon style={{ color: 'fff' }} />}
                />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({
                field: { name, onChange },
                fieldState: { error },
              }) => (
                <Input
                  onChange={onChange}
                  label='Senha'
                  type='password'
                  placeholder='Digite seu username'
                  error={error?.message}
                  variant={variantInput.lightDark}
                  name={name}
                  children={<VpnKeyIcon style={{ color: 'fff' }} />}
                />
              )}
            />
            <Controller
              control={control}
              name='confirmPassword'
              render={({
                field: { name, onChange },
                fieldState: { error },
              }) => (
                <Input
                  onChange={onChange}
                  label='Confirme a senha'
                  type='password'
                  placeholder='Digite seu username'
                  error={error?.message}
                  variant={variantInput.lightDark}
                  name={name}
                  children={<VpnKeyIcon style={{ color: 'fff' }} />}
                />
              )}
            />

            <input type='submit' />
          </form>
        </div>
      </div>
    </>
  );
}
