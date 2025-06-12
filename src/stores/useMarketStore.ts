import { create } from 'zustand';
import { Order, MarketStoreState } from '@/types/marketData';
import { TickerData } from '@/types/tickerData';

export const useMarketStore = create<MarketStoreState>((set) => ({
  ticker: null,
  orderBook: {
    bids: [],
    asks: [],
  },
  updateTicker: (ticker: TickerData) => set({ ticker }),
  updateBook: (bids: Order[], asks: Order[]) => set({ orderBook: { bids, asks } }),
}));
