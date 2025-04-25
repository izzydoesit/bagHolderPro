import { useEffect } from 'react';
import { create } from 'zustand';

type TickerData = {
    price: number;
    volume: number;
    bid: number;
    ask: number;
}

type Order= {
    price: number;
    size: number;
}

type MarketStore = {
    ticker: TickerData | null;
    bids: Order[];
    asks: Order[];
    update: (ticker: TickerData) => void;
    updateBook: (bids: Order[], asks: Order[]) => void;
}

export const useMarketStore = create<MarketStore>((set) => ({
    ticker: null,
    bids: [],
    asks: [],
    update: (ticker) => set({ ticker}),
    updateBook: (bids, asks) => set({ bids, asks }),
}))

export function useMarketData() {
    const update = useMarketStore((store) => store.update);
    const updateBook = useMarketStore((store) => store.updateBook);

    useEffect(() => {
        let socket: WebSocket | null = null; // Explicitly typed as WebSocket | null

        // mocked for now TODO: use real socket
        const interval = setInterval(() => {
            const mock = {
                price: +(Math.random() * 100 + 100).toFixed(2),
                volume: Math.floor(Math.random() * 1000),
                bid: +(Math.random() * 5 + 95).toFixed(2),
                ask: +(Math.random()* 5 + 105).toFixed(2),
            };
            update(mock);
        }, 1000);

        return () => {
            clearInterval(interval);
            socket?.close();
        }
    }, [update]);
}