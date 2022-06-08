import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextUser } from '../../contexts/Context';
import { Gerente } from '../../models/ModelGerente';
import { User } from '../../models/ModelUser';
import { TypeButton } from '../../Types/TypeButton';

export function ButtonLink({
  action,
  color,
  text,
  children,
  state,
  onClick,
}: TypeButton) {
  const { setPickUser } = useContext(ContextUser);

  const handleClick = () => {
    if (onClick) {
      const value = onClick();
      if (value === 'colaborador') {
        setPickUser(new Gerente());
      } else {
        setPickUser(new User());
      }
    }
  };

  return (
    <Link to={`${action}`}>
      <button
        className={`flex items-center justify-center disabled:opacity-70 cursor-pointer  gap-2 rounded-md px-7 py-2 font-semibold text-base text-white capitalize hover:opacity-80 ease-linear transition-opacity 
        `}
        style={{ background: `${color}` }}
        disabled={state ? true : false}
        onClick={handleClick}>
        {children && children}
        <span>{text}</span>
      </button>
    </Link>
  );
}
