import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function MenuItem({
  id,
  name,
  imgURL,
  cat,
  price,
  spiciness,
  isGF,
  isVegan,
  quantity,
  subtotal,
  isAdded,
  handleRemove,
  handleQuantityChange,
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
          onChange={(e) => handleQuantityChange(e, id)}
        />
        <button type="reset" onClick={() => handleRemove(id)}>
          <DeleteForeverIcon />
        </button>
        <span>$: {subtotal}</span>
      </form>
    </div>
  );
}
