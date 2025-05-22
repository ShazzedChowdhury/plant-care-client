import React from 'react';

const LoadingSpiner = () => {
    return (
      <div className="max-w-7xl py-40 grid justify-center items-center min-h-[calc(100vh-464px)] mx-auto">
        <span className="loading loading-xl loading-spinner text-accent"></span>
      </div>
    );
};

export default LoadingSpiner;