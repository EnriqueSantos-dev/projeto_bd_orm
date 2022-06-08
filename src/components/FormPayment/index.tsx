import { FormEvent, FormEventHandler, useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { colors } from '../../helpers/colorsBasic';

type Props = {
  sendPayment: (value: boolean) => void;
};
export function FormPayment({ sendPayment }: Props) {
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [valueSapply, setValueSupply] = useState<number>();
  const [formIsValide, setFormIsValide] = useState<boolean>(true);
  const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form
      action=''
      className='flex flex-col gap-6 justify-center  bg-bgTheme-600 rounded-md p-9 w-full max-h-[70vh]'
      onSubmit={handleSubmit}>
      <label className='text-white font-light text-base cursor-pointer smm:text-sm'>
        Quantos litros vai abastecer ?
        <input
          className='mt-2 block max-w-full w-full bg-bgTheme-800 rounded-md py-2 px-3 border-2 border-bgTheme-800 outline-none  border-solid focus:border-brain-500 focus:ring-brain-500 text-[#ccc] placeholder:text-[#ccc] font-light smm:text-sm'
          type='number'
          name='valueSapply'
          placeholder='Digite o valor em litro. Ex: 10 ou 10.3'
          onChange={e => setValueSupply(+e.target.value)}
        />
      </label>
      <label className='text-white font-light text-base cursor-pointer smm:text-sm'>
        Nome
        <input
          className='mt-2 block max-w-full w-full bg-bgTheme-800 rounded-md py-2 px-3 border-2 border-bgTheme-800 outline-none  border-solid focus:border-brain-500 focus:ring-brain-500 text-[#ccc] placeholder:text-[#ccc] font-light smm:text-sm'
          type='text'
          name='nome'
          placeholder='Digite seu nome'
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className='text-white font-light text-base cursor-pointer smm:text-sm'>
        CPF
        <input
          className='peer mt-2 block max-w-full w-full bg-bgTheme-800 rounded-md py-2 px-3 border-2 border-bgTheme-800 outline-none  border-solid focus:border-brain-500 focus:ring-brain-500 text-[#ccc] placeholder:text-[#ccc] font-light smm:text-sm'
          type='text'
          name='cpf'
          placeholder='Digite seu CPF'
          onChange={e => setCpf(e.target.value)}
        />
        <span className='hidden peer-invalid:block'>
          digite o cpf sem pontuação
        </span>
      </label>
      <button
        className='disabled:opacity-70 disabled:pointer-events-none cursor-pointer rounded-md flex gap-2  px-7 py-2 font-semibold text-base text-white capitalize hover:opacity-80 ease-linear transition-opacity w-[150px] mx-auto'
        disabled={!formIsValide || isLoadingPayment ? true : false}
        style={{ background: `${colors.greenHighLight}` }}>
        <AttachMoneyIcon />
        pagar
      </button>
      {/* esse botão vai esperar a reposta da validação do form para poder mostrar uma tela de agradecimento ao usuário. */}
    </form>
  );
}
