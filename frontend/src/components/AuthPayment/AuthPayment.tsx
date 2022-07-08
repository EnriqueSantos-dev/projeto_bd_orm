import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/userContext/hooks/useUser';

type Props = {
  children: ReactNode;
};

export const AuthPayment = ({ children }: Props) => {
  const { user } = useUserContext();
  const [isExistsUserData, setIsExistsUserData] = useState<Array<Object>>();

  useEffect(() => {
    setIsExistsUserData(() => Object.entries(user));
  }, []);

  if (isExistsUserData?.length == 0) {
    return <Navigate to='/' />;
  }
  return <>{children}</>;
};
