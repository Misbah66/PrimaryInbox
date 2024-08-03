// src/pages/CreateNewPasswordPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import eye from '../images/eye.png';
import eyeFilled from '../images/eyeFilled.png';
import circleButton from '../images/circleButton.png'; // Assuming this is the image for the arrow button
import otpSuccess from '../images/otpSuccess.png'; // Assuming this is the image for the success popup

const CreateNewPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#684FFF] to-[#B871FE] font-poppins">
      <Link to="/" className="absolute top-4 left-4">
        <img src={circleButton} alt="Back arrow" className="h-8 w-8" />
      </Link>
      <Logo />
      <h2 className="mt-6 text-center text-2xl font-extrabold text-white">
        Create New Password
      </h2>
      <form className="mt-8 space-y-6 w-full max-w-md px-8" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="New Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={showPassword ? eyeFilled : eye}
              alt="Toggle password visibility"
              onClick={togglePasswordVisibility}
              className={`absolute inset-y-0 right-3 h-5 w-5 my-auto cursor-pointer ${showPassword ? 'text-black' : 'text-gray-400'}`}
            />
          </div>
          <div className="relative">
            <label htmlFor="confirm-password" className="sr-only">
              Confirm New Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset password
          </button>
        </div>
      </form>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-530px h-567.67px relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={handlePopupClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center mt-4">
              <img src={otpSuccess} alt="Success" className="w-16 h-16" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-extra text-gray-900">
              Password changed
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Your password has been changed successfully
            </p>
            <button
              className="mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handlePopupClose}
            >
              Back to login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewPasswordPage;
