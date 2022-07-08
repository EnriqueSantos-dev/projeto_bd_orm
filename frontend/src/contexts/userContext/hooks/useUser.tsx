import { useContext } from 'react';
import { userContext } from '../components';

export function useUserContext() {
  return useContext(userContext);
}
