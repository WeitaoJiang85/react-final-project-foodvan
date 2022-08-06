import { ProductList } from "./ProductList";
import MenuItem from "../component/MenuItem";
import "../styles/Menu.css";
import { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Menu() {
  const [products, setProducts] = useState(ProductList);
  const [shoppingcart, setShoppingCart] = useState([]);
  const [totalprice, setTotalPrice] = useState(0);
  const [totalitems, setTotalItems] = useState(0);

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
    const newproducts = products.slice();
    if (keyword === "up") {
      setProducts(newproducts.sort((a, b) => a.price - b.price));
    } else if (keyword === "down") {
      setProducts(newproducts.sort((a, b) => b.price - a.price));
    } else setProducts(products);
  };

  const handleTotalPrice = () => {
    let totalPrice = shoppingcart.reduce(
      (sum, e) => sum + Number(e.subtotal || 0),
      0
    );
    return totalPrice;
  };

  const handleTotalItems = () => {
    let totalitems = shoppingcart.reduce(
      (sum, e) => sum + Number(e.quantity || 0),
      0
    );
    return totalitems;
  };

  /* const handleCart = () => {
    let cart = products.filter((item) => item.isAdded === true);
    console.log(cart);
  };*/

  const handleRemove = (id) => {
    const newcart = shoppingcart.filter((item) => item.id !== id);
    setShoppingCart([...newcart]);
    setTotalPrice(handleTotalPrice());
    setTotalItems(handleTotalItems());
    const delitem = products.filter((item) => item.id === id);
    delitem[0].isAdded = false;
    delitem[0].quantity = 0;
    delitem[0].subtotal = 0;

    console.log(`shoppingcart`, shoppingcart);
    console.log(`products`, products);
  };
  const handleQuantityChange = (e, id) => {
    const newshopping = products.filter((item) => item.id === id);

    if (e.target.value > 0) {
      newshopping[0].isAdded = true;
      newshopping[0].quantity = e.target.value;
      newshopping[0].subtotal = e.target.value * newshopping[0].price;
      console.log(`newshopping`, newshopping);
    }

    const cart = products.filter((item) => item.isAdded === true);
    setShoppingCart(cart);
    setTotalPrice(handleTotalPrice());
    setTotalItems(handleTotalItems());
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <p>
        <span>Total Items: {totalitems}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>Total Price: $ {totalprice}</span>
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
            Price⬆️
          </ToggleButton>
          <ToggleButton value="down" aria-label="vegetarian">
            Price⬇️
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="menuList">
        {products.map((item) => {
          return (
            <MenuItem
              products={products}
              key={item.id}
              index={item.index}
              id={item.id}
              name={item.name}
              imgURL={item.imgURL}
              cat={item.cat}
              price={item.price}
              spiciness={item.spiciness}
              isGF={item.isGF}
              isVegan={item.isVegan}
              quantity={item.quantity}
              subtotal={item.subtotal}
              isAdded={item.isAdded}
              handleQuantityChange={handleQuantityChange}
              handleRemove={() => handleRemove(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
