import React from 'react';
import { useNavigate } from 'react-router';

const GetStartedBtn = () => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => navigate("/all-plants")}
        className="btn btn-primary text-white"
      >
        Get Started
      </button>
    );
};

export default GetStartedBtn;