import { TickerData } from '@/types/tickerData';
import { useEffect, useRef, useState } from 'react';
import { useMarketStore } from '@/stores/useMarketStore';
import { MarketStoreState } from '../types/marketData';


export default function MockStockTicker() {
  const tickerData: TickerData | null = useMarketStore((state: MarketStoreState) => state.ticker);
  const updateTicker = useMarketStore((state: MarketStoreState) => state.updateTicker);
  const prevPrice = useRef<number | null>(null);
  const [priceChange, setPriceChange] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = +(100 + Math.random() * 2).toFixed(2);
      const newTicker: TickerData = {
        symbol: 'AAPL',
        price: newPrice,
        volume: Math.floor(1000 + Math.random() * 1000),
        bid: +(newPrice - Math.random()).toFixed(2),
        ask: +(newPrice + Math.random()).toFixed(2),
      };

      if (prevPrice.current !== null) {
        if (newPrice > prevPrice.current) {
          setPriceChange('up');
        } else if (newPrice < prevPrice.current) {
          setPriceChange('down');
        } else {
          setPriceChange(null);
        }
      }
      prevPrice.current = newPrice;

      updateTicker(newTicker);
    }, 2000);

    return () => clearInterval(interval);
  }, [updateTicker]);

  if (!tickerData) {
    return <div className="text-sm text-zinc-400">📊 Loading mock stock ticker data...</div>;
  }

  const priceColor = priceChange === 'up' ? 'text-green-400' : priceChange === 'down' ? 'text-red-400' : 'text-white';

  return (
    <div className="flex flex-col gap-1 font-mono">
      <div className="text-sm text-gray-400">
        <span> 💰 ${tickerData.symbol}</span>
        <span className={`ml-2 ${priceColor}`}>💲 Price: ${tickerData.price}</span>
        <span className="ml-2">📉 Bid: ${tickerData.bid}</span>
        <span className="ml-2">📈 Ask: ${tickerData.ask}</span>
        <span className="ml-2">📊 Volume: {tickerData.volume}</span>
      </div>
    </div>
  );
}