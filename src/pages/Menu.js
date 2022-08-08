import React, { useEffect, useContext } from "react";
import { ProductList } from "./ProductList";
import MenuItem from "../component/MenuItem";
import "../styles/Menu.css";
import { Context } from "../App";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Menu() {
  const {
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
  } = useContext(Context);

  const filter = (keyword) => {
    if (keyword === "all") {
      setProducts(ProductList);
    } else if (keyword === "gf") {
      setProducts(ProductList.filter((product) => product.isGF === true));
    } else if (keyword === "veg") {
      setProducts(ProductList.filter((product) => product.isVegan === true));
    } else {
      setProducts(
        ProductList.filter(
          (product) =>
            product.cat === keyword ||
            product.name.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }
  };

  const sortByPrice = (keyword) => {
    const newProducts = products.slice();
    if (keyword === "up") {
      setProducts(newProducts.sort((a, b) => a.price - b.price));
    } else if (keyword === "down") {
      setProducts(newProducts.sort((a, b) => b.price - a.price));
    } else setProducts(products);
  };

  const handleTotalItems = () => {
    const newTotalItems = shoppingcart.reduce(
      (sum, e) => sum + Number(e.qty),
      0
    );
    setTotalItems(newTotalItems);
    console.log(`totalItems:`, totalItems);
  };

  useEffect(() => handleTotalItems());

  const handleTotalPrice = () => {
    const newTotalPrice = shoppingcart.reduce(
      (sum, e) => sum + Number(e.qty * e.price),
      0
    );
    setTotalPrice(newTotalPrice);
    console.log(`totalprice`, totalPrice);
  };

  useEffect(() => handleTotalPrice());

  const handleRemove = (id) => {
    const newList = products.map((item) =>
      item.id === id ? { ...item, isAdded: false, qty: 0 } : item
    );
    setProducts(newList);
    setShoppingCart(shoppingcart.filter((item) => item.id !== id));
    console.log(`shoppingcart`, shoppingcart);
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

  const handleAdd = (id) => {
    const newShopping = products.filter((item) => item.id === id);
    if (newShopping[0].isAdded === false) {
      newShopping[0].isAdded = true;
      setShoppingCart([...shoppingcart, { ...newShopping[0] }]);
    }

    console.log(`products`, products);
    console.log(`products`, products);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <p className="info-bar">
        <span>Total Items: {totalItems}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>Total Price: $ {totalPrice}</span>
      </p>
      <div className="filter">
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          aria-label="list filter"
          onChange={(e) => filter(e.target.value)}
        >
          <ToggleButton value="all" aria-label="all products">
            All
          </ToggleButton>
          <ToggleButton value="main" aria-label="main food">
            Main
          </ToggleButton>
          <ToggleButton value="snack" aria-label="snacks">
            Snacks
          </ToggleButton>
          <ToggleButton value="pork" aria-label="food with pork">
            Pork
          </ToggleButton>
          <ToggleButton value="chicken" aria-label="food with chicken">
            Chicken
          </ToggleButton>
          <ToggleButton value="prawn" aria-label="food with seafood">
            Prawn
          </ToggleButton>
          <ToggleButton value="gf" aria-label="gluten free">
            Gluten Free
          </ToggleButton>
          <ToggleButton value="veg" aria-label="vegetarian">
            Vegtarian
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          aria-label="sort by price"
          onChange={(e) => sortByPrice(e.target.value)}
          laber=""
        >
          <ToggleButton value="up" aria-label="gluten free">
            Price
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              ⬆️
            </span>
          </ToggleButton>
          <ToggleButton value="down" aria-label="vegetarian">
            Price
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              ⬇️
            </span>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="menuList">
        {products.map((item) => {
          return (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              imgURL={item.imgURL}
              cat={item.cat}
              price={item.price}
              spiciness={item.spiciness}
              isGF={item.isGF}
              isVegan={item.isVegan}
              qty={item.qty}
              subtotal={item.subtotal}
              isAdded={item.isAdded}
              handleChange={(e) => handleChange(e, item.id)}
              handleRemove={(e) => handleRemove(e, item.id)}
              handleAdd={() => handleAdd(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
