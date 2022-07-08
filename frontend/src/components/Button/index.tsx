import { TypeButton } from '../../Types/TypeButton';

export function Button({ text, color, children }: TypeButton) {
  return (
    <div className='flex-1 flex justify-end relative'>
      <button
        className='group flex items-center ease-linear rounded-md px-4 py-2 font-semibold text-base text-white capitalize '
        style={{ background: `${color}` }}>
        {children && children}
        <span className='max-w-0 max-h-6 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          {text}
        </span>
      </button>
    </div>
  );
}
