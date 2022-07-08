import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Postotype } from '../../Types/Postotype';
import { colors } from '../../helpers/colorsBasic';

import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

import { ButtonLink } from '../../components/ButtonLink';
import { Button } from '../../components/Button';
import { PostoItem } from '../../components/PostoItem';
import { Loading } from '../../components/Loading';
import Header from '../../components/Header';
import { api } from '../../lib/baseURL';

type responseGetPostos = {
  data: Postotype[];
};

export default function Postos() {
  const [postos, setPostos] = useState<Postotype[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadPostos();
  }, []);

  const loadPostos = async () => {
    setLoading(true);
    const { data } = await api.get<responseGetPostos>('/postos');
    const responseMapped = data.data.map(item => {
      return { ...item, isActive: false };
    });
    setPostos(responseMapped);
    setLoading(false);
  };

  return (
    <>
      <Header>
        <div className='flex-1'>
          <ButtonLink color={`${colors.redButton}`} action='/' text='voltar'>
            <SettingsBackupRestoreIcon />
          </ButtonLink>
        </div>
        <Button color='#8257E6' text='Escolha do posto'>
          <LocalGasStationIcon style={{ color: '#fff' }} />
        </Button>
      </Header>

      <div className='max-w-[900px]  rounded-md bg-bgTheme-700 h-[75vh] max-h[80vh] mx-auto my-12 px-5 pt-10 flex flex-col  gap-10 '>
        <div className='w-full flex items-center justify-center'>
          <h3 className='text-white font-semibold text-xl'>
            Selecione um posto
          </h3>
        </div>
        {isLoading ? (
          <div className='w-full flex flex-col gap-1 items-center justify-center flex-1'>
            <Loading />
            <span className='text-white'>Carregando Postos...</span>
          </div>
        ) : (
          <div className='flex-1 grid grid-cols-2 gap-y-5 place-items-center overflow-y-auto sd:grid-cols-1'>
            {postos.map((item, key) => (
              <PostoItem key={key} data={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
