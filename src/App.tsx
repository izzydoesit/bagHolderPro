import { useLayoutEffect } from 'react'
import { useMarketData } from './hooks/useMarketData'
import { MarketTicker } from './components/MarketTicker';
import './App.css'

function App() {
  useMarketData();

  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">🧠 Trading Dashboard</h1>
      <MarketTicker />
    </div>
  );
}

export default App
