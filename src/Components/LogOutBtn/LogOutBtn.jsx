import React from 'react';

const LogOutBtn = ({ handleLogOut }) => {
  return (
    <button
      onClick={handleLogOut}
      className="btn bg-primary text-white hidden md:block font-semibold"
    >
      Log out
    </button>
  );
};

export default LogOutBtn;