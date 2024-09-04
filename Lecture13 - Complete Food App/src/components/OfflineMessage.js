import React from 'react';

const OfflineMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <div className="text-6xl mb-4">📶</div>
        <h1 className="text-3xl font-bold mb-2">Oops! You are offline</h1>
        <p className="text-gray-700 mb-4">Please check your internet connection</p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default OfflineMessage;
