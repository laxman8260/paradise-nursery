import React from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor Plants" },
  { id: 2, name: "Aloe Vera", price: 10, category: "Indoor Plants" },

  { id: 3, name: "Peace Lily", price: 20, category: "Flowering Plants" },
  { id: 4, name: "Orchid", price: 25, category: "Flowering Plants" },

  { id: 5, name: "Money Plant", price: 18, category: "Air Purifying Plants" },
  { id: 6, name: "Spider Plant", price: 12, category: "Air Purifying Plants" },
];

function ProductList() {
  return (
    <div>
      <h2>Our Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>

          <p>Category: {plant.category}</p>

          <p>Price: ${plant.price}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
