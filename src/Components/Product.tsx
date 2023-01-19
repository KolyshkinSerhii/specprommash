import React from 'react'
import { productType } from '../Redux/Products'
import '..//assets/css/Product.scss'
import '..//assets/css/fonts.scss'

type PropsType = {
  product: productType
}

const Product: React.FC<PropsType> = ({ product }) => {
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={`data:image/jpeg;base64,${product.image}`} alt='' />
      </div>
      <div className='product-name'>
        {product.title}
      </div>
      <div className='product-price'>
        <p>Ціна</p>
        <p className='product-price-text'>{product.price}</p>
      </div>
    </div>
  )
}

export default Product