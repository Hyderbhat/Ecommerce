import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, addToCart, removeItemCompletely, clearCart } from '../redux/cartSlice';
import { X, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

const Cart = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate('/payment');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Cart panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-gray-900 p-8 rounded-l-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-white">Cart ({cart.totalQuantity})</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Cart items */}
          <div className="mt-4 space-y-4">
            {cart.items.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                <ShoppingCart size={48} className="mx-auto mb-4" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-4 border-b border-gray-700">
                    {/* Item image */}
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-gray-700 shadow-lg">
                      <img
                        src={item.img || "https://placehold.co/100x100"}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Item details */}
                    <div className="ml-4 flex-1 flex-col text-sm">
                      <div className="flex justify-between text-white">
                        <p>{item.title}</p>
                        <p className="text-gray-400">₹{item.totalPrice.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-gray-300">
                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="p-2 text-gray-300 hover:text-white bg-gray-700 rounded-full transition-all"
                          >
                            <Minus size={16} />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(addToCart(item))}
                            className="p-2 text-gray-300 hover:text-white bg-gray-700 rounded-full transition-all"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => dispatch(removeItemCompletely(item.id))}
                          className="text-red-400 hover:text-red-300 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="mt-6 border-t border-gray-700 pt-4">
              <div className="flex justify-between text-lg font-semibold text-white">
                <p>Subtotal</p>
                <p>₹{cart.totalAmount.toLocaleString()}</p>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="px-6 py-2 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-700 transition"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="px-6 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;