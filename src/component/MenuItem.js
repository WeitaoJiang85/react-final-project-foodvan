import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function MenuItem({
  id,
  name,
  imgURL,
  price,
  spiciness,
  isGF,
  isVegan,
  handleRemove,
  handleChange,
  handleAdd,
  qty,
}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${imgURL})` }}> </div>
      <h3> {name} </h3>
      <p>
        <span> $ {price}.00 </span>
        {spiciness === 1 ? (
          <span>🌶️</span>
        ) : spiciness === 2 ? (
          <span>🌶️🌶️</span>
        ) : spiciness === 3 ? (
          <span>🌶️🌶️🌶️</span>
        ) : null}

        <span hidden={!isGF}>
          <strong> GF </strong>
        </span>
        <span hidden={!isVegan}>
          <strong> VEG </strong>
        </span>
      </p>
      <form>
        <input
          type="number"
          name={name}
          min="0"
          max="20"
          placeholder="0"
          onChange={(e) => handleChange(e, id)}
        />
        <button type="button" onClick={() => handleAdd(id)}>
          <AddShoppingCartIcon />
        </button>
        <button type="reset" onClick={() => handleRemove(id)}>
          <DeleteForeverIcon />
        </button>
      </form>
    </div>
  );
}
