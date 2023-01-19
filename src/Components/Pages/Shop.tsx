import React from 'react'
import Header from '../Header'
import Products from '../Products'
import '..//..//assets/css/Shop.scss'
import Footer from '../Footer'

type Props = {}

const Shop = (props: Props) => {
  return (
    <div>
      <Header />
      <div className='shop-container'>
        <div className='container'>
          <Products />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Shop