import React, { useState } from 'react';
import {Product} from './models/product'

import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Startview from './components/Startview'
import './App.css';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems]= useState<object[]>([])
  const products: Product[] = [
    {
      id: 1,
      name: "Eyeliner",
      price: 199,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 2,
      name: "Waterproof Mascara",
      price: 225,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 3,
      name: "Mascara",
      price: 205,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 4,
      name: "Blush",
      price: 145,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 5,
      name: "Powder brush",
      price: 185,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 6,
      name: "Eye Palette",
      price: 445,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 7,
      name: "Lip Gloss",
      price: 138,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 8,
      name: "Makeup Bag",
      price: 285,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 9,
      name: "Foundation",
      price: 280,
      description: 'lorem ipsum...',
      image: ''
    },
    {
      id: 10,
      name: "Makeup Sponge",
      price: 95,
      description: 'lorem ipsum...',
      image: '/logo192.png'
    }
  ]

  function addProductToCart(product: Object) {
    setCartItems(cartItems => [...cartItems, product]);
  }

  function RemoveProductFromCart (array_index: number) {
    let tmp_array: Object[] = []
    
    // Add the items that dosen't match the given array_index.
    cartItems.map((item, index) => {
      if (index !== array_index) {
        tmp_array.push(item)
      }
    })
    return setCartItems(tmp_array)
  }

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <NavLink to="/"> Start</NavLink> | 
            <NavLink to="/login"> Login</NavLink> | 
            <NavLink to="/cart"> Cart</NavLink>
            {cartItems.length}
          </nav>
        </header>
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Startview products={products} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart products={cartItems} removeFromCart={RemoveProductFromCart}/>}></Route>
            <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addProductToCart}/>}></Route>
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
