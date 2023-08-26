import React from 'react'
import ProductPreview from '../ProductPreview/ProductPreview'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../ProductDetail/ProductDetail'


export default function Inventory() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProductPreview/>} />
            <Route path="/:id" element={<ProductDetail />}  />
        </Routes>
    </div>
  )
}
