import { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock(false);
  }

  return (
    <div className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      <button onClick={handleClick}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantCard;