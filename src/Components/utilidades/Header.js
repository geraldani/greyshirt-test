import React from 'react';
import "./utilidades.css"
import logo from '../../images/logo.png'

const Header = () => (
    <header>
        <div className="container-fluid header">
            <img src={logo} alt='logo de la empresa' className='logo-image'/>
            <h1>Delivery Online</h1>
        </div>
    </header>
)

export default Header;