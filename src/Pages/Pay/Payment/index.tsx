import { FormEvent, useState } from 'react';

import { colors } from '../../../helpers/colorsBasic';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { Button } from '../../../components/Button';
import { ButtonLink } from '../../../components/ButtonLink';
import Header from '../../../components/Header';
import { FormPayment } from '../../../components/FormPayment';

export default function Payment() {
  const [sendPayment, setSendPayment] = useState<boolean>(false);
  return (
    <>
      <Header>
        {!sendPayment ? (
          <ButtonLink
            color={`${colors.redButton}`}
            action='/postos'
            text='voltar'
            state={sendPayment && true}>
            {/* mudar essa rota */}
            <SettingsBackupRestoreIcon />
          </ButtonLink>
        ) : (
          <span></span>
        )}
        <Button color='#8257E6' text='pagamento'>
          <LocalAtmIcon style={{ color: '#fff' }} />
        </Button>
      </Header>
      <div className='mt-10 bg-bgTheme-700 max-w-[900px] mx-auto rounded-md flex flex-col justify-center items-center gap-9 p-10 '>
        <div className='w-full flex justify-center  rounded-md px-5 py-2'>
          <h2 className='text-white font-semibold text-lg smm:text-base'>
            Insriar suas informações para efetuar o pagamento.
          </h2>
        </div>
        <FormPayment sendPayment={() => setSendPayment} />
      </div>
    </>
  );
}
