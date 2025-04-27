import { Order, OrderBook } from '@/types/marketData';
import OrderRow from '../components/OrderBook/OrderRow';
import { useMarketStore } from "@/stores/useMarketStore";
import { MarketStoreState } from '../types/marketData';


export default function MockOrderBook() {
  const mockOrderBookData: OrderBook = useMarketStore((state: MarketStoreState) => state.orderBook);

  const maxBidSize = mockOrderBookData.bids.length > 0 ? Math.max(...mockOrderBookData.bids.map((bid: Order) => bid.size)) : 0;
  const maxAskSize = mockOrderBookData.asks.length > 0 ? Math.max(...mockOrderBookData.asks.map((a: Order) => a.size)) : 0;

  if (!mockOrderBookData) {
      return <div className="text-sm text-gray-400">Loading Level II data...</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Bids</h2>
        <div className="space-y-1">
          {mockOrderBookData.bids.map((bid: Order, i: number) => (
            <OrderRow key={i} price={bid.price} size={bid.size} type="bid" maxSize={maxBidSize} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Asks</h2>
        <div className="space-y-1">
          {mockOrderBookData.asks.map((ask: Order, i: number) => (
            <OrderRow key={i} price={ask.price} size={ask.size} type="ask" maxSize={maxAskSize} />
          ))}
        </div>
      </div>
    </div>
  );
}
