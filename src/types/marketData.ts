import { TickerData } from "./tickerData";

export type Order = {
  price: number;
  size: number;
};

export type MarketState = {
    ticker: TickerData | null;
    // Record<string, number>; // e.g., { AAPL: 187.23 }
    orderBook: {
      bids: Order[],
      asks: Order[],
    };
    updateTicker: (ticker: TickerData) => void;
    updateBook: (bids: Order[], asks: Order[]) => void;
  };