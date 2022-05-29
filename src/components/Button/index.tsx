import { TypeButton } from '../../Types/TypeButton';

export function Button({ text, color, children, animated }: TypeButton) {
  return (
    <div className='flex-1 flex justify-end relative'>
      <button
        className={`peer flex items-center ease-linear transition-opacity hover:opacity-90 gap-2 rounded-md px-4 py-2 font-semibold text-base text-white capitalize  'animate-none'
        ${animated && 'animate-wiggle'}
        `}
        style={{ background: `${color}` }}>
        {children && children}
      </button>
      <span className='hidden opacity-0 absolute top-12 right-0 peer-hover:block peer-hover:opacity-100  font-semibold text-base text-white  capitalize '>
        {text}
      </span>
    </div>
  );
}
