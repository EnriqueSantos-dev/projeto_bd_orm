import { useContext } from 'react';
import { ContextUser } from '../../contexts/Context';

export default function Login() {
  const { user } = useContext(ContextUser);
  console.log(user)
  return <div>Login</div>;
}
