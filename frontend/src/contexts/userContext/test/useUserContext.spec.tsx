import { useUserContext } from '../hooks/useUser';
import { act, renderHook } from '@testing-library/react';
import { ProviderUseContext } from '../components';
import { faker } from '@faker-js/faker';

describe('Testing useUserContext hook', () => {
  it('should be able pick gas station', () => {
    const { result } = renderHook(useUserContext, {
      wrapper: ProviderUseContext
    });

    const mockPostoId = faker.datatype.uuid();
    act(() => {
      result.current.setPickGasStation(mockPostoId);
    });

    expect(result.current.user.pickGasStation).toEqual(mockPostoId);
  });

  it('should be able pick supply', () => {
    const { result } = renderHook(useUserContext, {
      wrapper: ProviderUseContext
    });

    const mockSupplyId = faker.datatype.uuid();
    act(() => {
      result.current.setPickSupply(mockSupplyId);
    });

    expect(result.current.user.pickSupply).toEqual(mockSupplyId);
  });

  it('should be able to add a supply value', () => {
    const { result } = renderHook(useUserContext, {
      wrapper: ProviderUseContext
    });

    const mockValueSupply = faker.datatype.number({ precision: 0.01 });
    act(() => {
      result.current.setValueSupply(mockValueSupply);
    });

    expect(result.current.user.valueSupply).toBe(mockValueSupply);
  });

  it('should be able add correctly infos person', () => {
    const { result } = renderHook(useUserContext, {
      wrapper: ProviderUseContext
    });

    const mockPersonalInfos = { name: 'enrique', cpf: '100002002' };

    act(() => {
      result.current.setPersonalInfos(mockPersonalInfos);
    });

    expect({
      name: result.current.user.name,
      cpf: result.current.user.cpf
    }).toEqual(mockPersonalInfos);
  });
});
