import React from 'react';

const RegisterBtn = ({ navigate }) => {
    return (
      <button
        onClick={() => navigate("/auth/register-form")}
        className="btn border-2 border-primary hover:bg-primary hover:text-white hidden md:block"
      >
        Register
      </button>
    );
};

export default RegisterBtn;