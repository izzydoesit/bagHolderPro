import MockStockTicker from "@/mocks/MockStockTicker";
import TradePanel from "@/components/TradePanel/TradePanel";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white grid grid-rows-[auto_1fr_auto] gap-4 p-4">
      <header className="flex justify-between items-center text-lg font-semibold">
        <span>⏱️ 09:30:05</span>
        <MockStockTicker />
        <span>Account: +$2,540</span>
      </header>

      <main className="grid grid-cols-[1fr_2fr_1fr] gap-4">
        {children}
      </main>

      <footer className="bg-gray-900 p-4 rounded-lg text-center">
        <TradePanel />
      </footer>
    </div>
  );
}