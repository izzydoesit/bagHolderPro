// Project: trading-dashboard
// File Created: Wednesday, 4th October 2023 10:00:00 am
import { Button } from "./components/button";
import { useLayoutEffect } from "react";
import './App.css'

function App() {
  useLayoutEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">🧠 Trading Dashboard</h1>
      <Button className="text-lg">Let’s trade some stonks 🚀</Button>
    </div>
  );
}

export default App
