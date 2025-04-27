import { useEffect } from "react";

export function useFinnhubSocket(symbols: string[], onMessage: (data: any) => void) {
  useEffect(() => {
    if (!symbols.length) return;

    const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
    const ws = new WebSocket(`wss://ws.finnhub.io?token=${apiKey}`);

    ws.onopen = () => {
      console.log('✅ Finnhub socket opened');

      // Subscribe to each symbol
      symbols.forEach(symbol => {
        ws.send(JSON.stringify({ type: 'subscribe', symbol }));
      });
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      if (parsedData.type === 'trade') {
        // 'trade' events contain price and volume
        onMessage(parsedData.data);
      }
    };

    ws.onerror = (error) => {
      console.error('❌ Finnhub socket error:', error);
    };

    ws.onclose = () => {
      console.log('🚪 Finnhub socket closed');
    };

    return () => {
      ws.close();
    };
  }, [symbols, onMessage]);
}
