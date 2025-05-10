import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const AddToCartButton = ({ product, className }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) {
      console.error('Product is undefined in AddToCartButton');
      return;
    }

    const price = String(product.price || '0');
    const cleanedPrice = parseFloat(price.replace(/[^\d.]/g, '') || 0);

    dispatch(
      addToCart({
        id: product.id,
        title: product.title || 'Unknown Product',
        price: cleanedPrice,
        img: product.img || null,
      })
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`relative text-black hover:text-gray-700 transition-colors ${className || ''}`}
      aria-label="Add to cart"
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <CheckIcon className="w-4 h-4 text-green-500" />
          </motion.span>
        ) : (
          <motion.span
            key="plus"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <PlusIcon className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AddToCartButton;
