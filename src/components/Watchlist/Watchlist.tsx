import { Card } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/CardContent";

const mockStocks = [
  { symbol: "AAPL", last: 187.23, gain: 2.15, percent: 1.16, bid: 187.2, ask: 187.25, volume: 1234567 },
  { symbol: "MSFT", last: 322.12, gain: -1.34, percent: -0.41, bid: 322.0, ask: 322.2, volume: 987654 },
  { symbol: "TSLA", last: 912.45, gain: 5.23, percent: 0.58, bid: 912.2, ask: 912.6, volume: 1122334 },
  { symbol: "NVDA", last: 720.30, gain: 8.10, percent: 1.14, bid: 720.1, ask: 720.5, volume: 556677 },
];

export default function Watchlist() {
  return (
    <Card className="bg-zinc-900">
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm whitespace-nowrap">
          <thead>
            <tr className="text-gray-400">
              <th className="px-2 text-left">Symbol</th>
              <th className="px-2 text-left">Last</th>
              <th className="px-2 text-left">$Gain</th>
              <th className="px-2 text-left">%Gain</th>
              <th className="px-2 text-left">Bid</th>
              <th className="px-2 text-left">Ask</th>
              <th className="px-2 text-left">Volume</th>
            </tr>
          </thead>
          <tbody>
            {mockStocks.map((stock) => (
              <tr key={stock.symbol} className="border-t border-zinc-800">
                <td className="px-2 py-1">{stock.symbol}</td>
                <td className="px-2 py-1">${stock.last.toFixed(2)}</td>
                <td className="px-2 py-1">{stock.gain.toFixed(2)}</td>
                <td className={`px-2 py-1 ${stock.percent >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {stock.percent.toFixed(2)}%
                </td>
                <td className="px-2 py-1">${stock.bid.toFixed(2)}</td>
                <td className="px-2 py-1">${stock.ask.toFixed(2)}</td>
                <td className="px-2 py-1">{stock.volume.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
