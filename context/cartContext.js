import { createContext, useContext, useState } from "react";

const Context = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState({ current: [], previous: [] });
  return (
    <Context.Provider value={[orders, setOrders]}>{children}</Context.Provider>
  );
}

export function useOrderContext() {
  return useContext(Context);
}
