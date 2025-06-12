import { useState } from "react";
import { Trade } from "@/types/accountData";

export function useOrders() {
  const [orders, setOrders] = useState<Trade[]>([]);

  const placeOrder = (order: Trade) => {
    setOrders((prev) => [...prev, order]);
  };

  const getOpenOrders = () => {
    return orders;
  };

  return { orders, placeOrder, getOpenOrders };
}
