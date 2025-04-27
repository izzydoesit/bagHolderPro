import { useMarketData } from './hooks/useMarketData'
import AppLayout from './components/Layout/AppLayout';
import './App.css'

function App() {
  useMarketData();

  return (
    <AppLayout />
  );
}

export default App
