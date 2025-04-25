import { useState } from "react";
import { useOrders } from "@/hooks/useOrders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trade } from "@/types/accountData";
import { Order } from "@/types/marketData";

export default function TradePanel() {
  const { placeOrder, getOpenOrders } = useOrders();
  const [symbol, setSymbol] = useState("AAPL");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [side, setSide] = useState<"buy" | "sell">("buy");

  const handleTrade = () => {
    if (!price || !size) return;

    const order: Trade = {
      symbol,
      price: parseFloat(price),
      size: parseInt(size),
      side,
      timestamp: Date.now(),
    };

    placeOrder(order);
    setPrice("");
    setSize("");
  };

  const openOrders = getOpenOrders();

  return (
    <Card className="bg-gray-900 border-gray-700 text-white">
        <div className="text-lg font-semibold text-center">🛒 Trade Panel (Buy/Sell)</div>

        <CardContent className="p-4 space-y-4">
            <div className="flex gap-2">
                <Input
                    className="bg-black text-white"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                    placeholder="Symbol"
                />
                <Input
                    className="bg-black text-white"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
                <Input
                    className="bg-black text-white"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="Size"
                />
            </div>

            <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setSide("buy")} className={side === "buy" ? "bg-green-600" : ""}>
                    Buy
                </Button>
                <Button variant="secondary" onClick={() => setSide("sell")} className={side === "sell" ? "bg-red-600" : ""}>
                    Sell
                </Button>
                <Button variant="default" onClick={handleTrade}>
                    Submit
                </Button>
            </div>

            <div className="text-sm pt-2">
                <h3 className="font-semibold">📋 Open Orders</h3>
                <ul className="text-zinc-300">
                    {openOrders.map((order: Order, i: number) => (
                        <li key={i}>
                            [{new Date(order.timestamp).toLocaleTimeString()}] {order.side.toUpperCase()} {order.size} {order.symbol} @ ${order.price}
                        </li>
                    ))}
                </ul>
            </div>
        </CardContent>
    </Card>
  );
}
