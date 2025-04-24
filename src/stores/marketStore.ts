import { create } from "zustand";

type MarketState = {
  prices: Record<string, number>; // e.g., { AAPL: 187.23 }
  orderBook: {
    bids: [number, number][],
    asks: [number, number][],
  };
  updatePrice: (symbol: string, price: number) => void;
  updateOrderBook: (bids: [number, number][], asks: [number, number][]) => void;
};

export const useMarketStore = create<MarketState>((set) => ({
  prices: {},
  orderBook: { bids: [], asks: [] },
  updatePrice: (symbol, price) =>
    set((state) => ({
      prices: { ...state.prices, [symbol]: price },
    })),
  updateOrderBook: (bids, asks) =>
    set(() => ({ orderBook: { bids, asks } })),
}));
