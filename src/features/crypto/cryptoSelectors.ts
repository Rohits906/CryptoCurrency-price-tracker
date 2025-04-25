import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Base selectors
export const selectCryptoState = (state: RootState) => state.crypto;
export const selectAllAssets = (state: RootState) => state.crypto.assets;
export const selectStatus = (state: RootState) => state.crypto.status;
export const selectError = (state: RootState) => state.crypto.error;
export const selectSearchTerm = (state: RootState) => state.crypto.searchTerm;

// Memoized selectors
export const selectAssetById = createSelector(
  [selectAllAssets, (_, assetId: string) => assetId],
  (assets, assetId) => assets.find(asset => asset.id === assetId)
);

export const selectFilteredAssets = createSelector(
  [selectAllAssets, selectSearchTerm],
  (assets, searchTerm) => {
    if (!searchTerm) return assets;
    const term = searchTerm.toLowerCase();
    return assets.filter(asset => 
      asset.name.toLowerCase().includes(term) || 
      asset.symbol.toLowerCase().includes(term)
    );
  }
);

export const selectTopAssets = createSelector(
  [selectFilteredAssets, (_, count?: number) => count],
  (assets, count = 10) => assets.slice(0, count)
);

export const selectTotalMarketCap = createSelector(
  [selectAllAssets],
  (assets) => assets.reduce((total, asset) => total + asset.marketCap, 0)
);

export const selectTotalVolume24h = createSelector(
  [selectAllAssets],
  (assets) => assets.reduce((total, asset) => total + asset.volume24h, 0)
);

export const selectAssetsByMarketCap = createSelector(
  [selectAllAssets],
  (assets) => [...assets].sort((a, b) => b.marketCap - a.marketCap)
);

export const selectAssetsByVolume = createSelector(
  [selectAllAssets],
  (assets) => [...assets].sort((a, b) => b.volume24h - a.volume24h)
);

export const selectAssetsByPriceChange24h = createSelector(
  [selectAllAssets],
  (assets) => [...assets].sort((a, b) => b.priceChange24h - a.priceChange24h)
);