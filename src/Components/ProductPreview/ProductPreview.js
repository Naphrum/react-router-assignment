import React from "react";
import inventory from "../../inventory.json";
import { Link } from 'react-router-dom'

export default function ProductPreview() {
  return (
    <div>
      {inventory.map((inventoryItem) => {
        return (
          <Link to={`/inventory/${inventoryItem.id}`}>
            <h2>{inventoryItem.name}</h2> 
            <h2>{inventoryItem.price}</h2>
          </Link>
        );
      })}
    </div>
  );
}
