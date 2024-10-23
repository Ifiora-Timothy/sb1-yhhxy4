import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import useStore from '../store/useStore';
import { ArrowDownUp, DollarSign } from 'lucide-react';

const Exchange = () => {
  const { user } = useAuth();
  const { prices, addTransaction, transactions } = useStore();
  const [type, setType] = useState<'buy' | 'sell'>('buy');
  const [cryptoCurrency, setCryptoCurrency] = useState('BTC');
  const [fiatAmount, setFiatAmount] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');

  const handleSubmit = () => {
    if (!user) return;

    addTransaction({
      userId: user.id,
      type,
      cryptoCurrency,
      fiatCurrency: 'USD',
      cryptoAmount: parseFloat(cryptoAmount),
      fiatAmount: parseFloat(fiatAmount),
      status: 'new',
    });

    setFiatAmount('');
    setCryptoAmount('');
  };

  const userTransactions = transactions.filter((tx) => tx.userId === user?.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Exchange Form */}
        <div className="bg-dark-400 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Exchange Cryptocurrency</h2>
          
          <div className="space-y-6">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setType('buy')}
                className={`flex-1 py-2 rounded ${
                  type === 'buy'
                    ? 'bg-green-600 text-white'
                    : 'bg-dark-300 text-gray-400'
                }`}
              >
                Buy Crypto
              </button>
              <button
                onClick={() => setType('sell')}
                className={`flex-1 py-2 rounded ${
                  type === 'sell'
                    ? 'bg-red-600 text-white'
                    : 'bg-dark-300 text-gray-400'
                }`}
              >
                Sell Crypto
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Cryptocurrency
              </label>
              <select
                value={cryptoCurrency}
                onChange={(e) => setCryptoCurrency(e.target.value)}
                className="w-full bg-dark-300 border border-gray-700 rounded-lg p-2 text-white"
              >
                {prices.map((price) => (
                  <option key={price.symbol} value={price.symbol}>
                    {price.symbol}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {type === 'buy' ? 'You Pay (USD)' : 'You Receive (USD)'}
              </label>
              <input
                type="number"
                value={fiatAmount}
                onChange={(e) => setFiatAmount(e.target.value)}
                className="w-full bg-dark-300 border border-gray-700 rounded-lg p-2 text-white"
                placeholder="0.00"
              />
            </div>

            <div className="flex justify-center py-2">
              <ArrowDownUp className="text-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {type === 'buy' ? 'You Receive' : 'You Send'} ({cryptoCurrency})
              </label>
              <input
                type="number"
                value={cryptoAmount}
                onChange={(e) => setCryptoAmount(e.target.value)}
                className="w-full bg-dark-300 border border-gray-700 rounded-lg p-2 text-white"
                placeholder="0.00000000"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!user}
              className={`w-full py-3 rounded-lg font-semibold ${
                type === 'buy'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              } ${!user && 'opacity-50 cursor-not-allowed'}`}
            >
              {!user
                ? 'Please Login to Exchange'
                : type === 'buy'
                ? 'Buy Cryptocurrency'
                : 'Sell Cryptocurrency'}
            </button>
          </div>
        </div>

        {/* Current Prices */}
        <div className="space-y-6">
          <div className="bg-dark-400 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Prices</h2>
            <div className="space-y-4">
              {prices.map((price) => (
                <div
                  key={price.symbol}
                  className="flex items-center justify-between p-4 bg-dark-300 rounded-lg"
                >
                  <div>
                    <span className="font-semibold">{price.symbol}</span>
                    <span className="text-gray-400 ml-2">/ USD</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${price.price.toLocaleString()}</div>
                    <div
                      className={`text-sm ${
                        price.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {price.change24h >= 0 ? '+' : ''}{price.change24h}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {user && (
            <div className="bg-dark-400 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Your Recent Transactions</h2>
              <div className="space-y-3">
                {userTransactions.slice(0, 5).map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-3 bg-dark-300 rounded-lg"
                  >
                    <div>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          tx.type === 'buy' ? 'bg-green-600' : 'bg-red-600'
                        }`}
                      >
                        {tx.type.toUpperCase()}
                      </span>
                      <span className="ml-2">
                        {tx.cryptoAmount} {tx.cryptoCurrency}
                      </span>
                    </div>
                    <div className="text-right">
                      <div>${tx.fiatAmount.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">
                        {new Date(tx.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
                {userTransactions.length === 0 && (
                  <div className="text-center text-gray-400 py-4">
                    No transactions yet
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exchange;