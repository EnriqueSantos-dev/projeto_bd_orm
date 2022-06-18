import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../lib/baseURL';

interface ClientPersonalInfos {
  name: string | null;
  cpf: string | null;
}

export interface Client extends ClientPersonalInfos {
  pickGasStation: string | null;
  pickFuel: string | null;
  valueSupply: number | null;
  loading: boolean;
  return: ReturnPayment;
}

const initialState: Client = {
  cpf: null,
  name: null,
  pickFuel: null,
  pickGasStation: null,
  valueSupply: null,
  loading: false,
  return: {
    success: false,
    errors: undefined,
  },
};

type ReturnPayment = {
  success: boolean;
  errors: string | undefined;
};

export const payment = createAsyncThunk(
  'client/payment',
  async ({ name, cpf, valueSupply, pickGasStation }: Client) => {
    try {
      const req = await api.post('/cliente/pagamento', {
        data: {
          name,
          cpf,
          valueSupply,
          pickGasStation,
        },
      });
      if (req.status == 201) {
        return await req.data;
      }
    } catch (error) {
      return error;
    }
  }
);

export const clientSlice = createSlice({
  initialState,
  name: 'client',
  reducers: {
    setAllInfos: (
      state,
      action: PayloadAction<{ name: string; cpf: string; valueSupply: number }>
    ) => {
      return {
        ...state,
        cpf: action.payload.cpf,
        name: action.payload.name,
        valueSupply: action.payload.valueSupply,
      };
    },
    setPickGasStation: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        pickGasStation: action.payload,
      };
    },
    setPickFuel: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        pickFuel: action.payload,
      };
    },
    resetInfos: state => {
      return {
        ...state,
        initialState: initialState,
        statusPayment: 'idle',
        erros: '',
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(payment.pending, (state, action) => {
      return { ...state, loading: true };
    });
    builder.addCase(
      payment.fulfilled,
      (state, action: PayloadAction<ReturnPayment>) => {
        return {
          ...initialState,
          loading: false,
        };
      }
    );

    builder.addCase(payment.rejected, (state, action) => {
      state.return.errors = action.error.message;
    });
  },
});

export const { setAllInfos, resetInfos, setPickFuel, setPickGasStation } =
  clientSlice.actions;

export const clientReducer = clientSlice.reducer;
