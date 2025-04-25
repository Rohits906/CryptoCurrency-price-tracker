import React from 'react';
import { TrendingUp, Search, Menu } from 'lucide-react';
import { selectTotalMarketCap } from '../features/crypto/cryptoSelectors';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { formatCompactNumber } from '../utils/formatters';
import { setSearchTerm } from '../features/crypto/cryptoSlice';

const Header: React.FC = () => {
  const totalMarketCap = useAppSelector(selectTotalMarketCap);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.crypto.searchTerm);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">CryptoTracker</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700">
              Market Cap: {formatCompactNumber(totalMarketCap)}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search coins..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <button className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;