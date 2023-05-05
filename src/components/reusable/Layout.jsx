import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) =>
{
  return (
    <div className='layout_main'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
