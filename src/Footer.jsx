import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HyShops</h2>
          <p className="text-sm text-gray-400">Quality fashion at your fingertips. Shop the latest trends with confidence.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="" onClick={()=> navigate("/men")}>Men</a></li>
            <li><a href="" onClick={()=> navigate("/women")}>Women</a></li>
            <li><a href="" onClick={()=> navigate("/kicks")}>Kicks</a></li>
            <li><a href="" onClick={()=> navigate("/gifts")}>Gifts</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="" onClick={()=> navigate("/about")}>About Us</a></li>
            <li><a href="" onClick={()=> navigate("/contact")}>Contact</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HyShops. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
