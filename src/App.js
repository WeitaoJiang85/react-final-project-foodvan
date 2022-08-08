import Routing from "./component/Routing.js";
import { ProductList } from "./pages/ProductList";
import React, { useState } from "react";

export const Context = React.createContext();
export function App(props) {
  const [shoppingcart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState(ProductList);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  return (
    <Context.Provider
      value={{
        shoppingcart,
        setShoppingCart,
        products,
        setProducts,
        quantity,
        setQuantity,
        totalPrice,
        setTotalPrice,
        totalItems,
        setTotalItems,
      }}
    >
      <Routing />
    </Context.Provider>
  );
}

export default App;
