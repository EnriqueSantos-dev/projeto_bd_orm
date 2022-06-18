import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { colors } from '../../helpers/colorsBasic';

import { variantInput } from '../InputForm/index';

import { Controller, useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../InputForm/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from './schemaValidateLogin';

type FormInputs = {
  userName: string;
  password: string;
  confirmPassword: string;
};

export function UserDetails() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormInputs>({
    resolver: yupResolver(schemaLogin),
  });

  const [state, setState] = useState<FormInputs | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
    setState(data);
    console.log(state);
  };

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='userName'
        render={({ field: { name, onChange }, fieldState: { error } }) => (
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
        render={({ field: { name, onChange }, fieldState: { error } }) => (
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
        render={({ field: { name, onChange }, fieldState: { error } }) => (
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

      <button>enviar</button>
    </form>
  );
}
