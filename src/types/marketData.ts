import { TickerData } from "./tickerData";

export type Order = {
  price: number;
  size: number;
};

export type OrderBook = {
  bids: Order[];
  asks: Order[];
}

export type MarketStoreState = {
  ticker: TickerData | null; // e.g., { AAPL: 187.23 }
  orderBook: {
    bids: Order[],
    asks: Order[],
  };
  updateTicker: (ticker: TickerData) => void;
  updateBook: (bids: Order[], asks: Order[]) => void;
};