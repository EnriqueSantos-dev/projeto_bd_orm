import { useNavigate } from 'react-router-dom';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { colors } from '../../helpers/colorsBasic';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { formPaymentSchema } from './schemaYupPayment';
import { Input, variantInput } from '../InputForm';

import { useUserContext } from '../../contexts/userContext/hooks/useUser';
import { useEffect, useState } from 'react';
import { Select } from '../Selected';
import { api } from '../../lib/baseURL';

type Props = {
  sendPayment: (value: boolean) => void;
};

const optionsSelect = [
  { value: 'ENTERPRISE', title: 'Pessoa jurídica' },
  { value: 'PERSON', title: 'Pessoa Física' }
];
export function FormPayment({ sendPayment }: Props) {
  const { user, setPersonalInfos, setValueSupply } = useUserContext();
  const [selectOption, setSelectOption] = useState<'PERSON' | 'ENTERPRISE'>();
  const [isPayment, setIsPayment] = useState(false);
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<TypeUserForm>({
    resolver: yupResolver(formPaymentSchema),
    mode: 'onChange'
  });

  interface TypeUserForm {
    valueSupply: number;
    name: string;
    cpf: string;
  }

  const onSumit: SubmitHandler<TypeUserForm> = async ({
    name,
    cpf,
    valueSupply
  }) => {
    //só vai funcionar se mandar os postos e tipos de combustíveis tiver os id do prisma
    setPersonalInfos({ name, cpf });
    setValueSupply(valueSupply);

    if (
      user.cpf &&
      user.name &&
      user.pickGasStation &&
      user.pickSupply &&
      user.valueSupply &&
      selectOption
    ) {
      try {
        setIsPayment(true);
        const res = await api.post<{ create: boolean }>('/cliente/pagamento', {
          name,
          cpf,
          type: selectOption,
          valueSupply,
          postoId: user.pickGasStation
        });
        sendPayment(true);
        setIsPayment(false);

        if (res.data.create) {
          navigate('/pagamento/concluido');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      action=''
      className='flex flex-col gap-6 justify-center  bg-bgTheme-600 rounded-md p-9 w-full '
      onSubmit={handleSubmit(onSumit)}>
      <Controller
        name='valueSupply'
        control={control}
        render={({ field: { onChange, name }, fieldState: { error } }) => (
          <Input
            onChange={e => onChange(Number(e.target.value))}
            error={error?.message}
            type='number'
            label='Quantos litros vai abastecer'
            variant={variantInput.dark}
            placeholder='Digite o valor em litro. Ex: 10 ou 10.3'
            name={name}
            step='0.1'
          />
        )}
      />
      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, name }, fieldState: { error } }) => (
          <Input
            onChange={onChange}
            error={error?.message}
            type='text'
            label='Nome'
            variant={variantInput.dark}
            placeholder='Digite seu nome'
            name={name}
          />
        )}
      />
      <Controller
        name='cpf'
        control={control}
        render={({ field: { onChange, name }, fieldState: { error } }) => (
          <Input
            onChange={onChange}
            error={error?.message}
            type='text'
            label='CPF'
            variant={variantInput.dark}
            placeholder='Digite seu CPF'
            name={name}
          />
        )}
      />
      <Select options={optionsSelect} selectedTypeClient={setSelectOption} />

      <button
        className={` disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-md flex gap- items-center justify-center  px-7 py-2 font-semibold text-base text-white capitalize hover:opacity-80 ease-linear transition-opacity w-[150px] mx-auto`}
        style={{ background: `${colors.greenHighLight}` }}
        disabled={isPayment ? true : false}>
        <AttachMoneyIcon />
        pagar
      </button>
    </form>
  );
}
