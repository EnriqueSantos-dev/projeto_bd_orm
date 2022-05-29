import { ChangeEvent, useEffect, useState } from 'react';

import { Postotype } from '../../Types/Postotype';
import { colors } from '../../helpers/colorsBasic';

import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { Search } from '@material-ui/icons';

import { ButtonLink } from '../../components/ButtonLink';
import { Button } from '../../components/Button';
import { PostoItem } from '../../components/PostoItem';
import { Loading } from '../../components/Loading';
import Header from '../../components/Header';

export default function Postos() {
  const [search, setSearch] = useState('');
  const [postos, setPostos] = useState<Postotype[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadPostos();
  }, []);

  const loadPostos = async () => {
    setLoading(true);
    let res = await fetch(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    );
    let data = await res.json();
    setPostos(data);
    setLoading(false);
  };

  return (
    <div className='p-6'>
      <Header>
        <div className='flex-1'>
          <ButtonLink color={`${colors.redButton}`} action='/' text='voltar'>
            <SettingsBackupRestoreIcon />
          </ButtonLink>
        </div>
        <div
          className={`flex flex-1 border-2 max-w-[380px] w-full  ring-offset-1 border-bgTheme-500 transition-all ease-linear hover:ring-inset hover:border-brain-500   items-center gap-3 bg-bgTheme-500 rounded-md px-5 ${
            search ? '#8257E6' : '#555555'
          }
          `}>
          <input
            className='flex-1 text-white bg-transparent py-2 px-2 outline-none text-white
             placeholder:text-white font-normal text-sm'
            type='text'
            placeholder='Pesquise por um dos nossos postos '
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <button>
            <Search
              style={{
                color: '#fff',
                width: '50px',
                height: '30px',
              }}
            />
          </button>
        </div>
        <Button color='#8257E6' text='Escolha do posto'>
          <LocalGasStationIcon style={{ color: '#fff' }} />
        </Button>
      </Header>

      <div className='max-w-[900px]  rounded-md bg-bgTheme-700 h-[500px] mx-auto my-12 px-5 pt-10 flex flex-col  gap-10 '>
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
          <div className='flex-1 grid grid-cols-2 gap-y-5 place-items-center overflow-y-auto'>
            {postos.map((item, key) => (
              <PostoItem key={key} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
