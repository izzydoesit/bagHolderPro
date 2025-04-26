import { Card } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/CardContent";

export default function AccountOverview() {
  const accountBalance = 2540.75;
  const buyingPower = 5000.00;
  const openPnL = 135.42;
  const equity = accountBalance + openPnL;

  return (
    <Card className="bg-zinc-950">
      <CardContent>
        <h2 className="text-xl font-semibold mb-2">📊 Account Overview</h2>
        <ul className="space-y-1 text-sm font-mono text-gray-300">
          <li>💰 Account Balance: ${accountBalance.toFixed(2)}</li>
          <li>📈 Equity: ${equity.toFixed(2)}</li>
          <li>🧮 Buying Power: ${buyingPower.toFixed(2)}</li>
          <li>📉 Open PnL: ${openPnL.toFixed(2)}</li>
        </ul>
      </CardContent>
    </Card>
  );
}
