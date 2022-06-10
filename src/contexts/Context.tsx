import { useState, createContext, ReactNode } from 'react';
import { Gerente } from '../models/ModelGerente';
import { User } from '../models/ModelUser';

type ContextTypeUser = {
  user: User | Gerente | null;
  setPickUser: (user: User | Gerente | null) => void;
  authenticated?: boolean;
};
const initialState = {
  user: null,
  setPickUser: () => {},
  authenticated: false,
};

export const ContextUser = createContext<ContextTypeUser>(initialState);

type PropsContext = {
  children: ReactNode;
};

export const ContextUserProvider = ({ children }: PropsContext) => {
  const [userTest, setUserTest] = useState<User | Gerente | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  const pickUser = (user: User | Gerente | null) => {
    setUserTest(user);
  };

  return (
    <ContextUser.Provider value={{ user: userTest, setPickUser: pickUser }}>
      {children}
    </ContextUser.Provider>
  );
};
