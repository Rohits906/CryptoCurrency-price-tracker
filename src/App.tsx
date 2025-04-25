import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import CryptoTable from "./components/CryptoTable";
import { cryptoSimulator } from "./services/cryptoSimulator";
import store from "./app/store";

function AppContent() {
  useEffect(() => {
    cryptoSimulator.start();
    return () => {
      cryptoSimulator.stop();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Cryptocurrency Prices
          </h1>
          <div className="text-sm text-gray-500">
            Prices update every 2 seconds
          </div>
        </div>

        <CryptoTable />
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Crypto data is simulated for demonstration purposes
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
