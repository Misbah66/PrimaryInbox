// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import eye from '../images/eye.png';
import eyeFilled from '../images/eyeFilled.png';
import emailImage from '../images/email.png';
import logo2 from '../images/logo2.png';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const handleSecondModalClose = () => {
    setIsSecondModalOpen(false);
    navigate('/create-new-password');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically validate the user's credentials
    // For this example, we'll just set the authentication flag and navigate
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/campaigns'); // Navigate to the Campaigns page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#684FFF] to-[#B871FE] font-poppins">
      <Logo />
      <h2 className="mt-6 text-center text-2xl font-extrabold text-white">
        Login To Your Account
      </h2>
      <form className="mt-8 space-y-6 w-full max-w-md px-8" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? eyeFilled : eye}
              alt="Toggle password visibility"
              onClick={togglePasswordVisibility}
              className={`absolute inset-y-0 right-3 h-5 w-5 my-auto cursor-pointer ${showPassword ? 'text-black' : 'text-gray-400'}`}
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <div className="relative">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="opacity-0 absolute h-7 w-7"
            />
            <div className="border border-gray-300 rounded-full h-5 w-5 flex items-center justify-center bg-transparent">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '12px', height: '12px' }}
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
            Remember me
          </label>
          <div className="ml-auto">
            <button
              type="button"
              className="text-sm text-indigo-200 hover:text-indigo-100 underline"
              onClick={handleForgotPasswordClick}
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-sm text-center mt-4">
        <p className="text-white">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-200 hover:text-indigo-100">
            Get Started
          </Link>
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={handleModalClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center mt-4">
              <img src={logo2} alt="Logo" className="w-16 h-16" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-extra text-gray-900">
              Reset your password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleModalSubmit}>
              <input
                type="email"
                className="w-full mt-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}

      {isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={handleSecondModalClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center mt-4">
              <img src={emailImage} alt="Email" className="w-16 h-16" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-extra text-gray-900">
              Verify your email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please check your email for a link to verify your email address.
            </p>
            <p className="mt-2 text-center text-sm text-gray-600">
              Still can't find the email? No problem.
            </p>
            <button
              className="mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSecondModalClose}
            >
              Resend verification email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
