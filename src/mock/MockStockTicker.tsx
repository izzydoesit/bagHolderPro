import { useMarketStore } from '@/hooks/useMarketData';
import { MarketStore } from '@/stores/useMarketStore';
import { TickerData } from '@/types/ticker';

export default function MockStockTicker() {
    const tickerData: TickerData | null = useMarketStore((store: MarketStore) => store.ticker);

    if (!tickerData) {
        return <div className="text-sm text-zinc-400">📊 Loading mock stock ticker data...</div>
    }

    return (
        <div className="flex flex-col gap-1 text-green-400 font-mono">
            <div className="text-sm text-gray-400">
                <span> 💰 $AAPL</span> 
                <span> | 💲 Price: ${tickerData.price}</span> | 
                <span> 📉 Bid: ${tickerData.bid}</span>
                <span> |  📈 Ask: ${tickerData.ask} </span>
                <span> | 📊 Volume: {tickerData.volume} </span>
            </div>
        </div>
    )
}