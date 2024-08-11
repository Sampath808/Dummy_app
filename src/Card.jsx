import "./index.css";
function Card({ sorce, altName, tag, priceTag }) {
  return (
    <>
      <div className="card">
        <img
          src={sorce}
          alt={altName}
          className="rounded"
          width="250"
          height="250"
        ></img>
        <p>{tag}</p>
        <p>{priceTag}</p>
        <button type="button" className="btn btn-warning">
          Add to cart
        </button>
      </div>
    </>
  );
}
export default Card;
