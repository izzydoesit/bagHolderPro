import { Card } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/CardContent";

const mockSales = [
  { time: "09:32:01", symbol: "AAPL", quantity: 100, price: 172.40 },
  { time: "09:32:03", symbol: "AAPL", quantity: 50, price: 172.41 },
  { time: "09:32:05", symbol: "AAPL", quantity: 200, price: 172.39 },
  { time: "09:32:08", symbol: "AAPL", quantity: 75, price: 172.42 },
];

export default function TimeAndSales() {
  return (
    <Card className="bg-zinc-900">
      <CardContent className="space-y-2 overflow-y-auto max-h-[300px]">
        <h2 className="text-lg font-semibold text-white mb-2">⏱️ Time & Sales</h2>
        <ul className="space-y-1">
          {mockSales.map((sale, idx) => (
            <li key={idx} className="flex justify-between text-sm">
              <span className="text-gray-400">{sale.time}</span>
              <span>{sale.symbol}</span>
              <span>{sale.quantity} @ ${sale.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
