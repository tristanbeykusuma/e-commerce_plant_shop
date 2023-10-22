import React from 'react'
import ProductLoop from '../product-loop/ProductLoop.component'

const ProductSection = () => {
  return (
    <div className='m-5'>
      <h3>Best Selling Products</h3>
      <hr/>
      <div className='row'>
      <ProductLoop/>
      </div>
    </div>
  )
}

export default ProductSection
