import React, { InputHTMLAttributes, useState } from 'react';

import eye from '../../assets/eye.svg';
import eyeSlash from '../../assets/eye-slash.svg';

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  error: string | undefined;
  variant: string;
  children?: JSX.Element;
}

export const variantInput = {
  lightDark: '#27272A',
  dark: '#18181B',
};

export function Input({
  label,
  placeholder,
  type,
  error,
  children,
  variant,
  ...res
}: IinputProps) {
  const [typeInput, setTypeInput] = useState<string>(type);
  const [isActive, setActive] = useState(false);
  const [isFocus, setFocus] = useState(false);

  const handleTypeInputPassword = () => {
    if (typeInput == 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
    setActive(!isActive);
  };
  return (
    <div className='min-w-[250px]'>
      <label
        className='text-white mb-2 block font-light text-base cursor-pointer smm:text-sm'
        htmlFor={res.name}>
        {label}
      </label>
      <div
        className={`flex items-center py-1 px-2 gap-2 border-2 border-solid rounded-md 
        ${(!error || res.value === '') && 'border-bgTheme-800 '}
        ${!error && res.value !== '' && isFocus && 'border-brain-500'}
        ${error && 'border-red-700'}
        ${variant === '#27272A' ? 'bg-bgTheme-600 ' : 'bg-bgTheme-700 '}`}>
        {children && children}
        <input
          className={` gap-2
              block max-w-full w-full  rounded-md py-2 px-3 outline-none   text-[#ccc] placeholder:text-[#ccc] font-light smm:text-sm' border-0 bg-transparent `}
          type={typeInput}
          placeholder={placeholder}
          {...res}
          id={res.name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />

        {type === 'password' && (
          <span
            className='cursor-pointer p-1'
            /*onClick={handleTypeInputPassword}*/
          >
            <img src={isActive ? eye : eyeSlash} alt='' width={30} />
          </span>
        )}
      </div>

      <span className='text-sm mt-2 mb-3 leading-5 block text-red-500'>
        {error && error}
      </span>
    </div>
  );
}
