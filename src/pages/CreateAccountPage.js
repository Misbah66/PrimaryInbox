import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import circleButton from '../images/circleButton.png';
import Logo from '../components/Logo';
import eye from '../images/eye.png';
import eyeFilled from '../images/eyeFilled.png';
import logo2 from '../images/logo2.png'; // Assuming you have this image for the modal logo

const CreateAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleVerificationChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#684FFF] to-[#B871FE] font-poppins">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <img src={circleButton} alt="Back" className="h-6 w-6" />
        </Link>
      </div>
      <Logo />
      <h2 className="mt-6 text-center text-2xl font-extrabold text-white">
        Create Your Salesline ID
      </h2>
      <form className="mt-8 space-y-6 w-full max-w-md px-8" onSubmit={handleFormSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="last-name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
          </div>
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
              id="terms"
              name="terms"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="opacity-0 absolute h-7 w-7"
            />
            <div className={`border border-gray-300 rounded-full h-5 w-5 flex items-center justify-center ${isChecked ? 'bg-[#A780FF]' : 'bg-transparent'}`}>
              {isChecked && (
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
              )}
            </div>
          </div>
          <label htmlFor="terms" className="ml-2 block text-sm text-white">
            By proceeding, you agree to the{' '}
            <button className="text-indigo-200 hover:text-indigo-100 underline">
              Terms and Conditions
            </button>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-sm text-center mt-4">
        <p className="text-white">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-200 hover:text-indigo-100">
            Sign In
          </Link>
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center mt-4">
              <img src={logo2} alt="Logo" className="w-16 h-16" />
            </div>
            <h2 className="mt-4 text-center text-2xl font-extra text-gray-900">
              Enter verification code
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              We have just sent a verification code to voltic@agency.com
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-10 h-10 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={digit}
                  onChange={(e) => handleVerificationChange(index, e.target.value)}
                />
              ))}
            </div>
            <p className="mt-4 text-right text-sm text-black cursor-pointer underline">
              Send the code again
            </p>
            <button
              className="mt-6 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setIsModalOpen(false)}
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccountPage;
