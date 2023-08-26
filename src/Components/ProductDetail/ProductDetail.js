import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import inventory from "../../inventory.json";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = inventory.find((product) => product.id === Number(id));

  return (
    <div>
        <h2>{product.name}</h2>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
        <p>{product.stock ? product.stock : "Out of Stock"}</p>
    </div>
  )
}
