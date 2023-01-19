import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../Redux/hooks'
import { requestProducts } from '../Redux/Products'
import { store } from '../Redux/store'
import Product from './Product'
import '..//assets/css/Products.scss'

type Props = {}

const Products: React.FC = (props: Props) => {

  const { products } = useAppSelector(state => state.products)
  const currentPage = useAppSelector(state => state.products.currentPage)
  const title = ''
  const dispatch = useDispatch()

  useEffect(() => {
    store.dispatch(requestProducts(currentPage, title))
  }, [currentPage, dispatch])
  return (
    <div>
      <div className='products-container'>
        {products.map(product => <Product 
          key={product.id}
          product={product}
        />)}
      </div>
    </div>
  )
}

export default Products