import React from 'react';
import Header from './components/Header';
import {Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import Gifts from './Gifts';
import About from './About';
import LoginSignup from './components/LoginSignup';
import Footer from './Footer';
import Men from './collections/Men';
import Women from './collections/Women';
import Kicks from './collections/Kicks';
import SummerSpring from './collections/SummerSpring';
import Cart from './components/Cart'; 
import PaymentPage from './components/PaymentPage';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gifts" element={<Gifts />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kicks" element={<Kicks />} />
        <Route path="summerSpring" element={<SummerSpring />} />
        <Route path="contact" element={<Contact />} />

        {/* Cart and Payment Routes */}
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<PaymentPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
