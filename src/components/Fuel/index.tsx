import { FuelType } from '../../Types/Fuel';
import { FuelHelper } from '../../Types/FuelTypeHelper';

type FuelItem = {
  data: FuelHelper;
  onClick: () => void;
};

export function FuelItem({ data, onClick }: FuelItem) {
  return (
    <div
      className={`w-full max-w-[200px] flex flex-col items-center gap-5 justify-between px-8 py-8 bg-bgTheme-600 text-white rounded-lg border-2 border-solid hover:border-brain-500 ease-linear transition-all cursor-pointer 
      ${data.isActive ? 'border-brain-500' : 'border-bgTheme-600 '}`}
      onClick={onClick}>
      <div className='w-full flex justify-center bg-bgTheme-500 py-4 px-7 text-xl uppercase  rounded-lg'>
        <h4>R$ {data.data.value}</h4>
      </div>
      <div className='uppercase text-base'>
        <h3>{data.data.name}</h3>
      </div>
    </div>
  );
}
