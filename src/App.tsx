import { useMarketData } from './hooks/useMarketData'
import DashboardLayout from './components/Layout/DashboardLayout';
// import TradingChart from './components/TradingChart/TradingChart';
import OrderBook from './components/OrderBook/OrderBook';
// import AccountPanel from './components/AccountPanel/AccountPanel';
import './App.css'

function App() {
  useMarketData();

  return (
    <DashboardLayout>
      {/* <TradingChart /> placeholder for now */}
      <OrderBook />
      {/* <AccountPanel /> placeholder for now */}
    </DashboardLayout>
  );
}

export default App
