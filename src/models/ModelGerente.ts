import { Client } from './ModelClient';
import { Posto } from './ModelPosto';

export class Gerente extends Client {
  id: string | null = null;
  login: string | null = null;
  password: string | null = null;
  imgProfile?: string;
  posto?: Posto;
  token: string | null = null;

  // constructor(
  //   id: string,
  //   cpf: string,
  //   name: string,
  //   login: string,
  //   password: string,
  //   posto?: Posto
  // ) {
  //   super();
  //   this.id = id;
  //   this.cpf = cpf;
  //   this.name = name;
  //   this.login = login;
  //   this.password = password;
  //   this.posto = posto;
  // }

  updatePersonalData = async (
    name: string,
    cpf: string,
    imgProfile?: string
  ): Promise<void> => {
    let res = fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify({
        id: this.id,
        token: this.token,
        name,
        cpf,
        imgProfile,
      }),
    });
    let data = (await res).json();
    return data;
  };

  updateDataPosto = async (
    newLogin: string,
    newPassoword: string
  ): Promise<void> => {
    let res = await fetch('jjdjjd', {
      method: 'POST',
      body: JSON.stringify({
        id: this.id,
        newLogin,
        newPassoword,
      }),
    });
    let data = await res.json();
    return data;
  };
}
