import React from 'react'
import './Header.css'

function Header(props) {


 
    const {handleMenu}=props
    return (
        <div className="app-header" >
            <span className="header-title">My New Web Page</span>
            <span  onClick={()=>{handleMenu('home')}} >Homes</span>
            <span onClick={()=>{handleMenu('setting')}}>setting</span>
            <span onClick={()=>{handleMenu('usage')}}>Usage</span>
            <span onClick={()=>{handleMenu('logout')}}>Logout</span>

        </div>
    )
}

export default Header