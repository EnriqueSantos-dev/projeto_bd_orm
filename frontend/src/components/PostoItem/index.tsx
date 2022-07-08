import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Postotype } from '../../Types/Postotype';

import { useUserContext } from '../../contexts/userContext/hooks/useUser';

type PropsPostoItem = {
  data: Postotype;
};

export function PostoItem({ data }: PropsPostoItem) {
  const { setPickGasStation } = useUserContext();

  const navigate = useNavigate();
  const handleClickPosto = (id: string) => {
    setPickGasStation(id);
    console.log(id);
    navigate(`/posto/${id}`);
  };

  return (
    <div
      onClick={() => handleClickPosto(data.idPosto)}
      className={`${
        data.isActive && 'border-brain-500 bg-brain-500'
      } hover:border-brain-500   bg-bgTheme-400 rounded-md border-[2px] border-bgTheme-400 p-[1px] flex flex-col gap-[2px]
      min-w-[240px] min-w-[280px]  h-[200px] font-semibold 
      cursor-pointer text-white`}>
      <div className='rounded-t bg-bgTheme-600 flex flex-1  items-center justify-center'>
        {data?.imgBg ? (
          <img className='object-cover' src={data?.imgBg} alt='' />
        ) : (
          <h3>Img ou fig default</h3>
        )}
      </div>
      <div
        className={`flex items-center justify-center rounded-b h-[40px] bg-bgTheme-500 font-normal text-base`}>
        <p className='first-letter:capitalize'>Posto</p>
      </div>
    </div>
  );
}
