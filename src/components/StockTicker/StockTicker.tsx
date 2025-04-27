import { useEffect, useRef, useState } from "react";
import { useMarketStore } from "@/stores/useMarketStore";
import { MarketStoreState } from "../../types/marketData";
import { useFinnhubSocket } from "../../hooks/useFinnhubSocket";

export default function StockTicker() {
  const ticker = useMarketStore((state: MarketStoreState) => state.ticker);
  const updateTicker = useMarketStore((state: MarketStoreState) => state.updateTicker);
  const prevPrice = useRef<number | null>(null);
  const [priceChange, setPriceChange] = useState<'up' | 'down' | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  useFinnhubSocket(["AAPL"], (data) => {
    if (data && data.length > 0) {
      setPrice(data[0].p); // 'p' is price
    }
  });

  if (price === null) {
    return <div className="text-sm text-zinc-400">Loading AAPL price...</div>;
  }

  useEffect(() => {
    const websocket = new WebSocket("wss://example.com/ticker");

    websocket.onmessage = (event) => {
      const newTicker = JSON.parse(event.data);
      updateTicker(newTicker);

      if (prevPrice.current !== null) {
        setPriceChange(newTicker.price > prevPrice.current ? 'up' : newTicker.price < prevPrice.current ? 'down' : null);
      }

      prevPrice.current = newTicker.price;
    };

    return () => websocket.close();
  }, [updateTicker]);

  if (!ticker) return <div className="text-sm text-zinc-400">📊 Loading live stock data...</div>;

  const priceColor = priceChange === 'up' ? 'text-green-400' : priceChange === 'down' ? 'text-red-400' : 'text-white';

  return (
    <div className="flex flex-col gap-1 font-mono">
      <div className="text-sm text-gray-400">
        <span> 💰 ${ticker.symbol}</span>
        <span className={`ml-2 ${priceColor}`}>💲 Price: ${ticker.price.toFixed(2)}</span>
        <span className="ml-2">📉 Bid: ${ticker.bid}</span>
        <span className="ml-2">📈 Ask: ${ticker.ask}</span>
        <span className="ml-2">📊 Volume: {ticker.volume}</span>
      </div>
    </div>
  );
}
