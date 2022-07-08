import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type SelectProps = {
  options: {
    value: string;
    title: string;
  }[];
  selectedTypeClient: (item: 'PERSON' | 'ENTERPRISE') => void;
};

export const Select = ({ options, selectedTypeClient }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Selecione seu tipo');

  const handleSelected = ({ value, title }) => {
    setSelectedItem(title);
    setIsOpen(false);
    selectedTypeClient(value);
  };

  return (
    <div
      className={`transition-all w-full max-w-[300px]  bg-bgTheme-700 rounded-md mx-auto group
      ${!isOpen ? 'h-14 overflow-hidden' : ' overflow-auto h-auto'}`}
      role='select'>
      <button
        type='button'
        className={`w-full flex justify-between items-center text-white border-2 group-hover:border-brain-500 p-3 rounded-md h-full 
        ${isOpen ? 'border-brain-500' : 'border-bgTheme-700'} `}
        onClick={() => setIsOpen(prev => !prev)}>
        {selectedItem}
        <span
          className={`w-3 h-3 border-2 rounded-sm border-t-transparent border-r-transparent -rotate-45 -translate-y-1
        ${isOpen && 'rotate-[135deg] translate-y-[2px] '}`}></span>
      </button>

      <ul className='flex flex-col gap-1 px-4 py-3'>
        {options.map(option => (
          <li
            key={option.value}
            className='text-[#ccc] hover:brightness-75 transition-all '>
            <button
              type='button'
              role='option-item'
              onClick={() => handleSelected(option)}>
              {option.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
