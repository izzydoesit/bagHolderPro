import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardcontent";
import { Button } from "../ui/Button";

export default function OverviewModal() {
  const [open, setOpen] = useState(false);
  const accountBalance = 2540.75;
  const buyingPower = 5000.00;
  const openPnL = 135.42;
  const equity = accountBalance + openPnL;
  const positions = 3; // Number of open positions

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        Account: ${accountBalance.toFixed(2)}
      </button>

      {open && (
        <Card className="absolute right-0 mt-2 w-[300px] z-50">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <div>💰 Account Balance: ${accountBalance.toFixed(2)}</div>
              <div>📍 Positions: {positions} Open</div>
              <div>📈 Equity: ${equity.toFixed(2)}</div>
              <div>🧮 Buying Power: ${buyingPower.toFixed(2)}</div>
              <div>📉 Open PnL: ${openPnL.toFixed(2)}</div>
              <Button>
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
