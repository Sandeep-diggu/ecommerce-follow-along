import React from 'react'
import {Route,Routes} from "react-router-dom";
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import MyProducts from './components/MyProducts';

const AllRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/myproducts' element={<MyProducts/>}/>
        
    </Routes>
  )
}

export default AllRouting
