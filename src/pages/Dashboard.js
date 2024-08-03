// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <h1 className="text-2xl text-center font-bold text-gray-800">Dashboard</h1>
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
