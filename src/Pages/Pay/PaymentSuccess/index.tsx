import succesIcon from '../../../assets/success.svg';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import { ButtonLink } from '../../../components/ButtonLink';
import { colors } from '../../../helpers/colorsBasic';

export default function PaymentSuccess() {
  return (
    <div className='flex flex-col gap-5 items-center p-8 text-white bg-bgTheme-800 max-w-[386px] mx-auto mt-10 rounded-md'>
      <div className='p-2 flex items-center font-semibold gap-3'>
        <h2 className='text-xl'>Pagamento efetuado</h2>
        <img src={succesIcon} alt='' width={30} height={20} />
      </div>
      <div className='font-normal text-base px-2 text-center'>
        <p>
          O posto <strong>(nome do posto )</strong> agradeçe a sua preferencia,
          volte sempre.
        </p>
      </div>
      <div className='mt-5 leading-7 text-base px-2 text-center'>
        <p>
          Se quiser voltar a página home clique no botão home, caso queira o seu
          extrato clique no botão extrato para ser redirecionado a página.
        </p>
      </div>
      <div className='mt-5 flex items-center gap-4 '>
        <ButtonLink action='/' text='home' color={`${colors.blueButton}`}>
          <HomeIcon style={{ color: '#fff' }} />
        </ButtonLink>
        <ButtonLink
          action='/pagamento/extrato'
          text='extrato'
          color={`${colors.brain}`}>
          <DescriptionIcon style={{ color: '#fff' }} />
        </ButtonLink>
      </div>
    </div>
  );
}
