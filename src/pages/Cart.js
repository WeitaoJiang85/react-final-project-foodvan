import React, { useEffect, useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Context } from "../App";
import "../styles/Cart.css";

function Cart() {
  const {
    shoppingcart,
    quantity,
    totalPrice,
    totalItems,
    handleTotalPrice,
    handleTotalItems,
    handleChange,
    handleRemove,
  } = useContext(Context);

  useEffect(() => handleTotalItems());
  useEffect(() => handleTotalPrice());

  return (
    <div className="cart">
      <h1 className="cart-title">You Order</h1>
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Product</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Sub.</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {shoppingcart.map((item) => {
            return (
              <tr className="tableItem" key={item.id}>
                <td
                  className="item-name"
                  style={{ backgroundImage: `url(${item.imgURL})` }}
                >
                  {item.name}
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
                  <button
                    btn-type="reset"
                    onClick={() => handleRemove(item.id)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            );
          })}
          <tr className="bot-row">
            <td>{`Total Items:${totalItems}`}</td>
            <td>{`Total Items:${totalPrice}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
