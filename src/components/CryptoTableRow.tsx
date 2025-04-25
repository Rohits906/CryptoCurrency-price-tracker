import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectAssetById } from '../features/crypto/cryptoSelectors';
import { 
  formatCurrency, 
  formatPercentage, 
  getPercentageColorClass,
  formatCompactNumber,
  formatSupply
} from '../utils/formatters';
import CryptoChart from './CryptoChart';

interface CryptoTableRowProps {
  assetId: string;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ assetId }) => {
  const asset = useAppSelector(state => selectAssetById(state, assetId));
  
  if (!asset) return null;
  
  return (
    <tr>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
        {asset.rank}
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="font-medium text-gray-900">{asset.name}</div>
            <div className="text-gray-500 text-sm">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
        {formatCurrency(asset.price)}
      </td>
      <td className={`px-4 py-4 whitespace-nowrap text-right text-sm font-medium ${getPercentageColorClass(asset.priceChange1h)}`}>
        {formatPercentage(asset.priceChange1h)}
      </td>
      <td className={`px-4 py-4 whitespace-nowrap text-right text-sm font-medium ${getPercentageColorClass(asset.priceChange24h)}`}>
        {formatPercentage(asset.priceChange24h)}
      </td>
      <td className={`px-4 py-4 whitespace-nowrap text-right text-sm font-medium ${getPercentageColorClass(asset.priceChange7d)}`}>
        {formatPercentage(asset.priceChange7d)}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-500">
        {formatCompactNumber(asset.marketCap)}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-500">
        {formatCompactNumber(asset.volume24h)}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-500">
        <div className="flex flex-col">
          <span>{formatSupply(asset.circulatingSupply, asset.symbol)}</span>
          {asset.maxSupply && (
            <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full" 
                style={{ width: `${(asset.circulatingSupply / asset.maxSupply) * 100}%` }}
              ></div>
            </div>
          )}
        </div>
      </td>
      <td className="px-4 py-4 w-32">
        <CryptoChart data={asset.chartData} priceChange7d={asset.priceChange7d} />
      </td>
    </tr>
  );
};

export default CryptoTableRow