export default function MenuItem({ imgURL, title, price, gf, veg, spicy }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${imgURL})` }}> </div>
      <h3> {title} </h3>
      <p>
        <span> $ {price}.00 </span>
        {spicy === 0 ? (
          <span hidden={true}>🌶️</span>
        ) : spicy === 1 ? (
          <span>🌶️</span>
        ) : spicy === 2 ? (
          <span>🌶️🌶️</span>
        ) : spicy === 3 ? (
          <span>🌶️🌶️🌶️</span>
        ) : null}

        <span hidden={!gf}>
          <strong> GF </strong>
        </span>
        <span hidden={!veg}>
          <strong> VEG </strong>
        </span>
      </p>
    </div>
  )
}
