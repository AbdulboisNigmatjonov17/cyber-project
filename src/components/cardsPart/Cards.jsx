import React, { useState } from "react";
import { products } from "./data/cardData";

const Cards = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter((product) => {
    return filter === "All" || product.category === filter;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>

      <div className="mb-6 flex gap-4">
        {["All", "Shoes", "Phone", "Laptop", "Headphones"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              filter === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating}⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;