import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, signupUser } from '../redux/actions/authActions';
import { XMarkIcon } from '@heroicons/react/24/outline';

const LoginSignup = () => {
  const [view, setView] = useState('welcome');
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (view === 'signup' && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return alert('Please fix the errors');
    const userData = { email: formData.email, password: formData.password };
    view === 'signup' ? dispatch(signupUser(userData)) : dispatch(loginUser(userData));
    alert(view === 'signup' ? 'Account created successfully!' : 'Logged in successfully!');
    setFormData({ email: '', password: '', confirmPassword: '' });
    navigate('/');
  };

  const handleClose = () => navigate('/');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-2 bg-white rounded-full z-10 hover:bg-gray-100 transition-colors duration-200 text-black shadow-md"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      <div className="relative z-10 w-full max-w-md p-8 bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-300">
        {view === 'welcome' ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-2">
              HyShops<span className="text-black">.</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Log in or sign up to explore our latest collections, offers, and more!
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setView('login')}
                className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Log In
              </button>
              <button
                onClick={() => setView('signup')}
                className="w-full py-3 border border-gray-300 bg-white text-black rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setView('welcome')}
              className="absolute top-4 left-4 text-sm text-gray-600 hover:text-black flex items-center gap-1 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <h2 className="text-2xl font-semibold text-center text-black mb-8 mt-2">
              {view === 'signup' ? 'Create an Account' : 'Welcome Back'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
              </div>

              {view === 'signup' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 mt-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                {view === 'signup' ? 'Sign Up' : 'Login'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              {view === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setView(view === 'signup' ? 'login' : 'signup')}
                className="text-black font-medium hover:underline transition-all"
              >
                {view === 'signup' ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;