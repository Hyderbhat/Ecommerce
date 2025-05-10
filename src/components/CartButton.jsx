import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Cart from './Cart';

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button 
        onClick={toggleCart}
        className="relative p-1 hover:text-[#C71C38] transition-colors duration-200"
        aria-label="Shopping cart"
      >
        <ShoppingBagIcon className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#C71C38] rounded-full flex items-center justify-center text-xs text-white">
            {totalItems}
          </span>
        )}
      </button>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CartButton;