import { createContext, ReactNode, useEffect, useState } from 'react';
import { PersonalInfos } from '../../../components/SignupForm';

interface User {
  name: string;
  cpf: string;
  pickGasStation: string;
  pickSupply: string;
  valueSupply: number;
}

type PersonalInfos = {
  name: string;
  cpf: string;
};

interface IDataContext {
  user: User;
  setPickGasStation: (id: string) => void;
  setPickSupply: (id: string) => void;
  setPersonalInfos: (data: PersonalInfos) => void;
  setValueSupply: (value: number) => void;
  createUser: (user: User) => Promise<Boolean>;
}

export const userContext = createContext<IDataContext>({} as IDataContext);

type PropsContextProvider = {
  children: ReactNode;
};

export function ProviderUseContext({ children }: PropsContextProvider) {
  const [user, setUser] = useState<User>({} as User);

  const setPickGasStation = (id: string) => {
    setUser({ ...user, pickGasStation: id });
  };

  const setPickSupply = (id: string) => {
    setUser(prev => ({ ...prev, pickSupply: id }));
  };

  const setPersonalInfos = ({ name, cpf }: PersonalInfos) => {
    setUser(prev => ({ ...prev, name, cpf }));
  };

  const setValueSupply = (value: number) => {
    setUser(prev => ({ ...prev, valueSupply: value }));
  };

  const createUser = async (user: User) => {
    return await true;
  };
  return (
    <userContext.Provider
      value={{
        user,
        setPickGasStation,
        setPersonalInfos,
        setPickSupply,
        setValueSupply,
        createUser
      }}>
      {children}
    </userContext.Provider>
  );
}
