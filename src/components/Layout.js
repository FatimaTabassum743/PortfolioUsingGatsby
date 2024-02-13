import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <footer>
            <p>copyright 2024 fatima tabassum</p>
        </footer>
    </div>
  )
}

export default Layout