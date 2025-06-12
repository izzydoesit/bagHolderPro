import { useState } from "react";
import { useOrders } from "@/hooks/useOrders";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/CardContent";
import { Button } from "@/components/ui/Button";
import { Trade } from "@/types/accountData";

export default function TradePanel() {
  const { placeOrder, getOpenOrders } = useOrders();
  const [symbol, setSymbol] = useState("AAPL");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [side, setSide] = useState<"buy" | "sell">("buy");

  const handleTrade = () => {
    if (!price || !size || !symbol) return;

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
    <Card className="bg-zinc-900 border border-zinc-700 text-white p-4">
      <div className="text-lg font-semibold text-center mb-4">
        🛒 Trade Panel
      </div>

      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2">
          <Input
            className="bg-black text-white text-sm px-2 py-1"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="Symbol"
            maxLength={5}
          />
          <Input
            className="bg-black text-white text-sm px-2 py-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            maxLength={6}
          />
          <Input
            className="bg-black text-white text-sm px-2 py-1"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Quantity"
            maxLength={5}
          />
        </div>

        <div className="flex gap-2 justify-center">
          <Button
            variant="default"
            onClick={() => setSide("buy")}
            className={`w-14 text-sm ${side === "buy" ? "bg-green-600" : ""} hover:bg-green-700`}
          >
            Buy
          </Button>
          <Button
            variant="destructive"
            onClick={() => setSide("sell")}
            className={`w-14 text-sm ${side === "sell" ? "bg-red-600" : ""} hover:bg-red-700`}
          >
            Sell
          </Button>
          <Button variant="default" onClick={handleTrade} className="w-19 text-sm">
            Submit
          </Button>
        </div>

        <div className="text-sm pt-4">
          <h3 className="font-semibold text-zinc-200 mb-2">📋 Open Orders</h3>
          <ul className="space-y-1 text-zinc-400">
            {openOrders.map((order, i) => (
              <li key={i}>
                [{new Date(order.timestamp).toLocaleTimeString()}]{" "}
                {order.side.toUpperCase()} {order.size} {order.symbol} @ ${order.price}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
