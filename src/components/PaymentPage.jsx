import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import Cart from './Cart'; // Import the provided Cart component

const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form step (1: Shipping, 2: Payment, 3: Confirmation)
  const [step, setStep] = useState(1);
  // State for cart modal visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    cardNumber: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for next step
  const handleNextStep = () => {
    if (step === 1) {
      // Basic validation for shipping
      if (formData.fullName && formData.email && formData.address) {
        setStep(2);
      } else {
        alert('Please fill in all shipping details.');
      }
    } else if (step === 2) {
      // Basic validation for payment
      if (formData.cardNumber) {
        setStep(3);
        dispatch(clearCart()); // Clear cart on order confirmation
      } else {
        alert('Please enter card number.');
      }
    }
  };

  // Handle going back to previous step or opening cart
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setIsCartOpen(true); // Open cart modal
    }
  };

  // Handle return to shop after order confirmation
  const handleReturnToShop = () => {
    navigate('/');
  };

  // Render order summary
  const renderOrderSummary = () => (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
      {cart.items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 mb-3 text-sm text-gray-400">
          <img
            src={item.img || 'https://placehold.co/50x50'}
            alt={item.title}
            className="w-10 h-10 rounded-md object-cover border border-gray-700"
          />
          <div className="flex-1">
            <span>{item.title} x {item.quantity}</span>
          </div>
          <span>₹{item.totalPrice.toLocaleString()}</span>
        </div>
      ))}
      <div className="border-t border-gray-700 pt-4 mt-4">
        <div className="flex justify-between text-base font-semibold text-white">
          <span>Total</span>
          <span>₹{cart.totalAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );

  // Render shipping form
  const renderShippingForm = () => (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800">
      <h2 className="text-xl font-semibold text-white mb-6">Shipping Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your Address"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </div>
  );

  // Render payment form
  const renderPaymentForm = () => (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800">
      <h2 className="text-xl font-semibold text-white mb-6">Payment Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </div>
  );

  // Render confirmation page
  const renderConfirmation = () => (
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 text-center">
      <div className="text-gray-200 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-white mb-4">Thank You For Your Order!</h2>
      <p className="text-gray-400 mb-6">Your order has been placed successfully.</p>
      <button
        onClick={handleReturnToShop}
        className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
      >
        Continue Shopping
      </button>
    </div>
  );

  // Check if cart is empty
 if (cart.items.length === 0 && step !== 3) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="max-w-4xl p-6 pt-[30px] text-center bg-gray-900 rounded-lg shadow-xl border border-gray-800">
        <h2 className="text-2xl font-semibold text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Add some items to your cart before proceeding to checkout.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
  }

  return (
    <div className="min-h-screen bg-black pt-20 lg:pt-30 py-10">
      <div className="max-w-4xl mx-auto p-6 pt-[30px]">
        {/* Progress Steps */}
        {step !== 3 && (
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 text-center">
              <div className={`h-1 ${step >= 1 ? 'bg-white' : 'bg-gray-700'} rounded-l-full transition-all`}></div>
              <span className={`text-sm ${step >= 1 ? 'text-white font-semibold' : 'text-gray-500'}`}>Shipping</span>
            </div>
            <div className="flex-1 text-center">
              <div className={`h-1 ${step >= 2 ? 'bg-white' : 'bg-gray-700'} transition-all`}></div>
              <span className={`text-sm ${step >= 2 ? 'text-white font-semibold' : 'text-gray-500'}`}>Payment</span>
            </div>
            <div className="flex-1 text-center">
              <div className={`h-1 ${step >= 3 ? 'bg-white' : 'bg-gray-700'} rounded-r-full transition-all`}></div>
              <span className={`text-sm ${step >= 3 ? 'text-white font-semibold' : 'text-gray-500'}`}>Confirmation</span>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Form Area */}
          <div className={step === 3 ? 'lg:col-span-3' : 'lg:col-span-2'}>
            {step === 1 && renderShippingForm()}
            {step === 2 && renderPaymentForm()}
            {step === 3 && renderConfirmation()}
          </div>

          {/* Order Summary (only visible in steps 1-2) */}
          {step !== 3 && (
            <div className="lg:col-span-1">
              {renderOrderSummary()}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {step !== 3 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevStep}
              className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition flex items-center"
            >
              {step === 1 ? 'View Cart' : 'Back'}
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition flex items-center"
            >
              {step === 1 ? 'Continue to Payment' : 'Place Order'}
            </button>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default PaymentPage;