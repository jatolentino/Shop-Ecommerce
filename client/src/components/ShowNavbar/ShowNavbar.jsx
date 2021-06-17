import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowNavbar = ({ children }) => {
    const location = useLocation();
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        var theLoc = location.pathname 
        if(theLoc  === "/ecommerce/dashboard" || theLoc  === "/ecommerce/products/add" 
        ||  theLoc === "/vendor/login" || theLoc === "/ecommerce/products"
        || theLoc === "/ecommerce/customers" || theLoc === "/ecommerce/vendors"
        || theLoc === "/ecommerce/orders" || theLoc === "/ecommerce/vendors/vendor"
        || theLoc === "/ecommerce/customers/user"){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    }, [location])

    return (
        <div> {showNav && children } </div>
    )
}

export default ShowNavbar