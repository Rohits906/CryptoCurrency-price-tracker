import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectTopAssets } from '../features/crypto/cryptoSelectors';
import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableRow from './CryptoTableRow';

const CryptoTable: React.FC = () => {
  const assets = useAppSelector(selectTopAssets);
  
  return (
    <div className="flex flex-col mt-4">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <CryptoTableHeader />
              <tbody className="bg-white divide-y divide-gray-200">
                {assets.map((asset) => (
                  <CryptoTableRow key={asset.id} assetId={asset.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;