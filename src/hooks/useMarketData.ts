import { useEffect, useState } from 'react';
import { create } from 'zustand';

type TickerData = {
    price: number;
    volume: number;
    bid: number;
    ask: number;
}

type MarketStore = {
    ticker: TickerData | null;
    update: (ticker: TickerData) => void;
}

export const useMarketStore = create<MarketStore>((set) => ({
    ticker: null,
    update: (ticker) => set({ ticker})
}))

export function useMarketData() {
    const update = useMarketStore((store) => store.update);

    useEffect(() => {
        let socket: WebSocket | null = null;

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