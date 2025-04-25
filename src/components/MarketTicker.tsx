import { useMarketStore } from '@/hooks/useMarketData';

export function MarketTicker() {
    const ticker = useMarketStore((store) => store.ticker);

    if (!ticker) {
        return <div className="text-sm text-gray-400">Loading data...</div>
    }

    return (
        <div className="flex flex-col gap-1 text-green-400 font-mono">
            <div>💲 Price: ${ticker.price}</div>
            <div>📉 Bid: ${ticker.bid}</div>
            <div>📈 Ask: ${ticker.ask}</div>
            <div>📊 Volume: {ticker.volume}</div>
        </div>
    )
}