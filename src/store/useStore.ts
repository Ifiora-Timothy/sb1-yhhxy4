import create from 'zustand';

export type TransactionStatus = 'new' | 'processing' | 'completed' | 'failed';
export type TransactionType = 'buy' | 'sell';

interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  cryptoCurrency: string;
  fiatCurrency: string;
  cryptoAmount: number;
  fiatAmount: number;
  status: TransactionStatus;
  timestamp: number;
}

interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
}

interface StoreState {
  transactions: Transaction[];
  prices: CryptoPrice[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'timestamp'>) => void;
  updateTransactionStatus: (id: string, status: TransactionStatus) => void;
}

// Mock initial data
const mockPrices: CryptoPrice[] = [
  { symbol: 'BTC', price: 45000, change24h: 2.5 },
  { symbol: 'ETH', price: 2800, change24h: 1.8 },
  { symbol: 'USDT', price: 1, change24h: 0 },
];

const useStore = create<StoreState>((set) => ({
  transactions: [],
  prices: mockPrices,
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [
        {
          ...transaction,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
        },
        ...state.transactions,
      ],
    })),
  updateTransactionStatus: (id, status) =>
    set((state) => ({
      transactions: state.transactions.map((tx) =>
        tx.id === id ? { ...tx, status } : tx
      ),
    })),
}));

export default useStore;