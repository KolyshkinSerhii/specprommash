import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import '..//..//assets/css/Contacts.scss'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div>
      <Header />
      <div className='contacts-container'>
        <Footer />
      </div>
    </div>
  )
}

export default Contacts