import { Link } from 'react-router-dom';
import { TypeButton } from '../../Types/TypeButton';

export function ButtonLink({
  action,
  color,
  text,
  children,
  state,
}: TypeButton) {
  return (
    <Link to={`${action}`}>
      <button
        className='disabled:opacity-70 cursor-pointer rounded-md flex gap-2 rounded-md px-7 py-2 font-semibold text-base text-white capitalize hover:opacity-80 ease-linear transition-opacity '
        style={{ background: `${color}` }}
        disabled={state ? true : false}>
        {children && children}
        <span>{text}</span>
      </button>
    </Link>
  );
}
