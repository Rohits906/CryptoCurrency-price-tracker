import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset, CryptoState } from '../../types';
import { initialCryptoData } from './initialData';

const initialState: CryptoState = {
  assets: initialCryptoData,
  status: 'succeeded',
  error: null,
  searchTerm: '',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateMultipleAssets: (state, action: PayloadAction<(Partial<CryptoAsset> & { id: string })[]>) => {
      const updates = action.payload;
      updates.forEach(update => {
        const { id, ...assetUpdates } = update;
        const assetIndex = state.assets.findIndex(asset => asset.id === id);
        if (assetIndex !== -1) {
          state.assets[assetIndex] = {
            ...state.assets[assetIndex],
            ...assetUpdates,
          };
        }
      });
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateMultipleAssets, setSearchTerm } = cryptoSlice.actions;
export default cryptoSlice.reducer;