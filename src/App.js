import Routing from "./component/Routing.js";
import React, { useState } from "react";

export const Context = React.createContext();
export function App(props) {
  const [shoppingcart, setShoppingCart] = useState([]);
  return (
    <Context.Provider value={{ shoppingcart, setShoppingCart }}>
      <Routing />
    </Context.Provider>
  );
}

export default App;
