import React, { useEffect, useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Context } from "../App";

function Cart() {
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

  return (
    <table className="table">
      <thead>
        <tr className="table-header">
          <th>Product</th>
          <th>Qty.</th>
          <th>Price</th>
          <th>Subtotal</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {shoppingcart.map((item) => {
          return (
            <tr className="tableItem" key={item.id} style={{ height: "50px" }}>
              <td>
                <div
                  style={{
                    backgroundImage: `url(${item.imgURL})`,
                    backgroundPosition: "center",
                  }}
                >
                  {item.name}
                </div>
              </td>
              <td>
                <input
                  type="number"
                  name={item.name}
                  value={item.qty}
                  min="0"
                  max="20"
                  onChange={(e) => handleChange(e, item.id)}
                />
              </td>
              <td>{`$ ${item.price}.00`}</td>
              <td>{`$ ${item.price * quantity}.00`}</td>
              <td>
                <button type="reset" onClick={() => handleRemove(item.id)}>
                  <DeleteForeverIcon />
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>{`Total Items:${totalItems}`}</td>
          <td>{`Total Items:${totalPrice}`}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Cart;
