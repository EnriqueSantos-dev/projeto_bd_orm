import { useState, createContext, ReactNode } from 'react';
import { Gerente } from '../models/ModelGerente';
import { User } from '../models/ModelUser';

type ContextTypeUser = {
  user: User | Gerente | null;
  setPickUser: (user: User | Gerente | null) => void;
};
const initalState = {
  user: null,
  setPickUser: () => {},
};

export const ContextUser = createContext<ContextTypeUser>(initalState);

type PropsContext = {
  children: ReactNode;
};

export const ContextUserProvider = ({ children }: PropsContext) => {
  const [userTest, setUserTest] = useState<User | Gerente | null>(null);

  const pickUser = (user: User | Gerente | null) => {
    setUserTest(user);
  };

  return (
    <ContextUser.Provider value={{ user: userTest, setPickUser: pickUser }}>
      {children}
    </ContextUser.Provider>
  );
};
