import { updateMultipleAssets } from '../features/crypto/cryptoSlice';
import { store } from '../app/store';
import { CryptoAsset } from '../types';

class CryptoSimulator {
  private timer: number | null = null;
  private interval: number = 2000;

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.generateRandomUpdates();
    }, this.interval) as unknown as number;
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private generateRandomUpdates() {
    const assets = store.getState().crypto.assets;
    const updates: (Partial<CryptoAsset> & { id: string })[] = [];

    assets.forEach(asset => {
      const priceChangePercent = (Math.random() * 0.2 - 0.1) / 100;
      const newPrice = asset.price * (1 + priceChangePercent);
      
      const newPriceChange1h = this.adjustPercentage(asset.priceChange1h, 0.02);
      const newPriceChange24h = this.adjustPercentage(asset.priceChange24h, 0.02);
      const newPriceChange7d = this.adjustPercentage(asset.priceChange7d, 0.02);
      
      const volumeChangePercent = (Math.random() * 1 - 0.5) / 100;
      const newVolume24h = asset.volume24h * (1 + volumeChangePercent);

      const isStablecoin = asset.symbol === 'USDT';
      
      updates.push({
        id: asset.id,
        price: isStablecoin ? asset.price : Number(newPrice.toFixed(2)),
        priceChange1h: isStablecoin ? 0 : Number(newPriceChange1h.toFixed(2)),
        priceChange24h: isStablecoin ? 0 : Number(newPriceChange24h.toFixed(2)),
        priceChange7d: isStablecoin ? 0 : Number(newPriceChange7d.toFixed(2)),
        volume24h: Math.round(newVolume24h),
      });
    });

    store.dispatch(updateMultipleAssets(updates));
  }

  private adjustPercentage(currentValue: number, maxChange: number): number {
    const randomAdjustment = (Math.random() * maxChange * 2) - maxChange;
    return currentValue + randomAdjustment;
  }
}

export const cryptoSimulator = new CryptoSimulator();