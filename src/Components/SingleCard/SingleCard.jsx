import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SingleCard = ({plant}) => {
    const [ showOverlay, setOverLay ] = useState(false)
    const navigate = useNavigate()
    const handleViewDetails = (id) => {
      navigate(`/all-plants/${id}`);
    }
    return (
      <div
        onClick={() => setOverLay((prev) => !prev)}
        className="card bg-base-100 shadow-sm relative overflow-hidden group h-96"
      >
        <img src={plant?.image} className="object-cover w-full h-full" />

        <div
          className={`group-hover:bg-black/50 absolute inset-0 flex flex-col justify-end items-center p-4 ${
            showOverlay
              ? "translate-y-0 opacity-100 bg-black/50"
              : "translate-y-8 opacity-0"
          } transform  group-hover:translate-0 group-hover:opacity-100 transition-all duration-2000`}
        >
          <h1 className="text-white text-2xl font-bold mt-1">{plant.plantName}</h1>
          <p className="text-white text-lg mb-2">
            <span className='font-semibold'>Category:{" "}</span>
            {plant?.category}
          </p>
          <button
           onClick={() => handleViewDetails(plant?._id)}
           className="btn btn-primary text-white"
          >
            View Details</button>
        </div>
      </div>
    );
};

export default SingleCard;