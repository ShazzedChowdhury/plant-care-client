import React from 'react';

const LogInBtn = ({ navigate }) => {
    return (
      <button
        onClick={() => navigate("/auth/log-in-form")}
        className="btn border-2 border-primary hover:bg-primary hover:text-white hidden md:block"
      >
        Log In
      </button>
    );
};

export default LogInBtn;