import OrderRow from "./OrderRow";

const mockOrderBook = {
  bids: [
    { price: 100.1, size: 5 },
    { price: 99.8, size: 8 },
    { price: 99.5, size: 12 },
  ],
  asks: [
    { price: 100.4, size: 7 },
    { price: 100.6, size: 9 },
    { price: 101.0, size: 10 },
  ],
};

const maxBidSize = Math.max(...mockOrderBook.bids.map(b => b.size));
const maxAskSize = Math.max(...mockOrderBook.asks.map(a => a.size));

export default function OrderBook() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Bids</h2>
        <div className="space-y-1">
          {mockOrderBook.bids.map((bid, i) => (
            <OrderRow key={i} price={bid.size} size={bid.size} type="bid" maxSize={maxBidSize} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Asks</h2>
        <div className="space-y-1">
          {mockOrderBook.asks.map((ask, i) => (
            <OrderRow key={i} price={ask.price} size={ask.size} type="ask" maxSize={maxAskSize} />
          ))}
        </div>
      </div>
    </div>
  );
}
