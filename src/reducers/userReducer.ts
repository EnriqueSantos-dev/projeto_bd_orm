import { User } from '../models/ModelUser';
import { ActionTypeReducer } from '../Types/ActionTypeReducer';

export const TypesUserReducer = {
  SET_PERSONAL_INFOS: 'set_personal_infos',
  SET_VALUE_SUPPLY: 'set_value_supply',
  SET_GAS_STATION: 'pick_gas_station',
  GET_ALL_INFOS: 'get_all',
  PAYMENT_METHOD: 'payment',
};

export type userClient = {
  user: User;
};

export const userInitialState: userClient = {
  user: new User(),
};

export const userReducer = (
  state: userClient,
  actionUserType: ActionTypeReducer
) => {
  let copyState = { ...state };
  switch (actionUserType.type) {
    case TypesUserReducer.SET_PERSONAL_INFOS:
      copyState.user.setPersonalInfos(
        actionUserType.payload.name,
        actionUserType.payload.cpf
      );
      return copyState;

    case TypesUserReducer.SET_VALUE_SUPPLY:
      copyState.user.setGasStation(actionUserType.payload.idPosto);
      return copyState;

    case TypesUserReducer.SET_VALUE_SUPPLY:
      copyState.user.setValueSupply(actionUserType.payload.valueSuplly);
      return state;

    case TypesUserReducer.GET_ALL_INFOS:
      let infos = copyState.user.getAll();
      return state;

    case TypesUserReducer.PAYMENT_METHOD:
      copyState.user.payment();
      return state;
  }
  return state;
};
