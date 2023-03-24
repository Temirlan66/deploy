import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{textAlign:"center", marginTop:"20px"}}>
           <Link to="/home" style={{padding:"10px"}}>
            Home
           </Link>
           <Link to="/login" style={{padding:"10px"}}>
            login
           </Link>
           <Link to="/products" style={{padding:"10px"}}>
            Products
           </Link>
        </nav>
    );
};

export default NavBar
