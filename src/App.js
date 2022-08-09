import Routing from "./component/Routing.js";
import { ProductList } from "./pages/ProductList";
import React, { useState } from "react";

export const Context = React.createContext();
export function App() {
  const [shoppingcart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState(ProductList);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleTotalItems = () => {
    const newTotalItems = shoppingcart.reduce(
      (sum, e) => sum + Number(e.qty),
      0
    );
    setTotalItems(newTotalItems);
    console.log(`totalItems:`, totalItems);
  };

  const handleTotalPrice = () => {
    const newTotalPrice = shoppingcart.reduce(
      (sum, e) => sum + Number(e.qty * e.price),
      0
    );
    setTotalPrice(newTotalPrice);
    console.log(`totalprice`, totalPrice);
  };
  const handleAdd = (id) => {
    const newShopping = products.filter((item) => item.id === id);
    if (newShopping[0].isAdded === false) {
      newShopping[0].isAdded = true;
      setShoppingCart([...shoppingcart, { ...newShopping[0] }]);
    }

    console.log(`products`, products);
    console.log(`products`, products);
  };

  const handleChange = (e, id) => {
    setQuantity(e.target.value);
    console.log(quantity);
    if (e.target.value > 0) {
      const newShopping = shoppingcart.filter((item) => item.id === id);
      if (newShopping.length > 0) {
        newShopping[0].qty = e.target.value;
        console.log(`newshopping1`, newShopping);
      } else {
        const newShopping = products.filter((item) => item.id === id);
        newShopping[0].qty = e.target.value;
        console.log(`newshopping2`, newShopping);
      }
    } else {
      const newList = products.map((item) =>
        item.id === id ? { ...item, isAdded: false, qty: 0 } : item
      );
      setProducts(newList);
      console.log(`products`, products);
      setShoppingCart(shoppingcart.filter((item) => item.id !== id));
      console.log(`products`, products);
    }
  };

  const handleRemove = (id) => {
    const newList = products.map((item) =>
      item.id === id ? { ...item, isAdded: false, qty: 0 } : item
    );
    setProducts(newList);
    setShoppingCart(shoppingcart.filter((item) => item.id !== id));
    console.log(`shoppingcart`, shoppingcart);
    console.log(`products`, products);
  };

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
        handleTotalItems,
        handleAdd,
        handleChange,
        handleRemove,
        handleTotalPrice,
      }}
    >
      <Routing />
    </Context.Provider>
  );
}

export default App;
