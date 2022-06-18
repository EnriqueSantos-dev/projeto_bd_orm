import { Link } from 'react-router-dom';
import { TypeButton } from '../../Types/TypeButton';

export function ButtonLink({
  action,
  color,
  text,
  children,
  state,
  onClick,
}: TypeButton) {
  return (
    <Link to={`${action}`} onClick={onClick}>
      <button
        className={`flex items-center justify-center disabled:opacity-70 cursor-pointer  gap-2 rounded-md px-7 py-2 font-semibold text-base text-white capitalize hover:opacity-80 ease-linear transition-opacity 
        `}
        style={{ background: `${color}` }}
        disabled={state ? true : false}>
        {children && children}
        <span>{text}</span>
      </button>
    </Link>
  );
}
