import React from 'react';
import useStore, { TransactionStatus } from '../../store/useStore';

const AdminOrders = () => {
  const { transactions, updateTransactionStatus } = useStore();

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case 'new': return 'bg-blue-600';
      case 'processing': return 'bg-yellow-600';
      case 'completed': return 'bg-green-600';
      case 'failed': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Transaction Management</h1>
      
      <div className="bg-dark-400 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-dark-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Fiat</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-300">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-dark-300">
                <td className="px-6 py-4 text-sm">{tx.id}</td>
                <td className="px-6 py-4 text-sm">{tx.userId}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${
                    tx.type === 'buy' ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {tx.type.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  {tx.cryptoAmount} {tx.cryptoCurrency}
                </td>
                <td className="px-6 py-4 text-sm">
                  ${tx.fiatAmount.toLocaleString()} {tx.fiatCurrency}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(tx.status)}`}>
                    {tx.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  {new Date(tx.timestamp).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <select
                    value={tx.status}
                    onChange={(e) => updateTransactionStatus(tx.id, e.target.value as TransactionStatus)}
                    className="bg-dark-300 border border-gray-700 rounded px-2 py-1"
                  >
                    <option value="new">New</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;