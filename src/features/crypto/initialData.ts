import { CryptoAsset } from '../../types';

// Generate random chart data for the past 7 days
const generateChartData = (trend: 'up' | 'down' | 'stable', volatility: number): number[] => {
  const data: number[] = [];
  let baseValue = 100;
  
  // General trend factor
  const trendFactor = trend === 'up' ? 1.01 : trend === 'down' ? 0.99 : 1;
  
  for (let i = 0; i < 100; i++) {
    // Random volatility between -volatility and +volatility percent
    const randomChange = ((Math.random() * 2 - 1) * volatility) / 100;
    
    // Apply trend and random change
    baseValue = baseValue * trendFactor * (1 + randomChange);
    
    // Add data point if it's one of our 7 days (evenly spaced)
    if (i % 14 === 0 || i === 99) {
      data.push(baseValue);
    }
  }
  
  return data;
};

export const initialCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    price: 93759.48,
    priceChange1h: 0.43,
    priceChange24h: 0.93,
    priceChange7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85e6,
    maxSupply: 21e6,
    chartData: generateChartData('up', 5),
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    price: 1802.46,
    priceChange1h: 0.60,
    priceChange24h: 3.21,
    priceChange7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71e6,
    maxSupply: null,
    chartData: generateChartData('up', 7),
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    price: 1.00,
    priceChange1h: 0.00,
    priceChange24h: 0.00,
    priceChange7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27e9,
    maxSupply: null,
    chartData: generateChartData('stable', 0.1),
  },
  {
    id: 'xrp',
    rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    price: 2.22,
    priceChange1h: 0.46,
    priceChange24h: 0.54,
    priceChange7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39e9,
    maxSupply: 100e9,
    chartData: generateChartData('up', 8),
  },
  {
    id: 'bnb',
    rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    price: 606.65,
    priceChange1h: 0.09,
    priceChange24h: -1.20,
    priceChange7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89e6,
    maxSupply: 200e6,
    chartData: generateChartData('up', 6),
  },
];