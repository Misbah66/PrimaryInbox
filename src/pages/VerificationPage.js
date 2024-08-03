import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import
import p from '../images/p.png';
import p2 from '../images/p2.png'; // Import the eye image

const VerificationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#684FFF] to-[#B871FE] font-poppins">
      <div className="absolute top-4 left-4">
        <button onClick={handleBack} className="text-white">
          <img src={eyeImage} alt="Back" className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img src={p} alt="Logo" className="w-24 h-24" />
        <h2 className="mt-6 text-center text-2xl font-extra text-white">
          Login To Your Account
        </h2>
        <form className="mt-8 space-y-6 w-full max-w-md px-8">
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
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <img
                src={p2}
                alt="Show password"
                className="absolute inset-y-0 right-3 h-5 w-5 my-auto cursor-pointer"
                style={{ border: '3px solid #D1D1D6', borderRadius: '50%' }}
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
              <button className="text-sm text-indigo-200 hover:text-indigo-100 underline">
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
            <Link to="/" className="font-medium text-indigo-200 hover:text-indigo-100">
              Get Started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
