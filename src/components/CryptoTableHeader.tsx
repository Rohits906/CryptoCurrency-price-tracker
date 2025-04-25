import React from 'react';
import InfoIcon from './InfoIcon';

const CryptoTableHeader: React.FC = () => {
  return (
    <thead className="bg-gray-50 border-b">
      <tr>
        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          #
        </th>
        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Price
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          1h %
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          24h %
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          7d %
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Market Cap <InfoIcon tooltip="Total value of all coins in circulation" />
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Volume(24h) <InfoIcon tooltip="Total trading volume in the last 24 hours" />
        </th>
        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Circulating Supply <InfoIcon tooltip="Number of coins currently available" />
        </th>
        <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          Last 7 Days
        </th>
      </tr>
    </thead>
  );
};

export default CryptoTableHeader;