import React from "react";

const Card = ({ index, mistake }) => {

  return (
    <div className="p-8 rounded-lg transform translate-y-0 hover:-translate-y-2 transition-transform duration-1000 border-3 border-[#a6c1a0] shadow-lg">
      <div className="max-w-md text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary  text-white sm:w-16 sm:h-16 font-bold text-xl">
          {index + 1}
        </div>
        <h6 className="mb-2 text-lg font-semibold leading-5">{mistake?.title}</h6>
        <p className="mb-3 text-sm text-gray-900">
          {mistake?.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
