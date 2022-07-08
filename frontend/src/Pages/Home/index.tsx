import { ButtonLink } from '../../components/ButtonLink';

export default function Home() {
  return (
    <div className='flex'>
      <section className='flex flex-col  flex-1 gap-20'>
        <span className='flex items-center font-Poppins  bg-brain-500 px-[10px] py-3 max-w-[219px] w-full rounded font-semibold uppercase text-white'>
          Postos 50% é água
        </span>
        <div className='flex flex-col gap-12 w-full items-center'>
          <div className='py-10 px-5 rounded-md bg-bgTheme-800 max-w-[463px] text-xl'>
            <p className='font-normal text-lg leading-7 text-white'>
              Antes do senhor(a) poder acessar os nossos serviços é necessário
              que nos informe se é um cliente ou um colaborador.
            </p>
          </div>
          <div className='p-10 flex flex-col items-center gap-8 max-w-[463px] w-full bg-bgTheme-800 rounded-md flex-wrap md:items-center'>
            <div className='flex items-center font-normal text-lg  leading-8 text-white'>
              <p>Quem você é ?</p>
            </div>
            <div className='flex gap-10 flex-wrap justify-center items-center'>
              <ButtonLink color='#1E5FC1' text='cliente' action='/postos' />
              <ButtonLink color='#1E9F88' text='colaborador' action='/login' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
