import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetailsPage = () => {
    const selectedPlant = useLoaderData();
    
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 min-h-[calc(100vh-464px)]">
        <div className="hero bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row justify-between w-full gap-10">
            <img
              src={selectedPlant?.image}
              className="max-w-sm w-full rounded-lg"
            />
            <div className="flex-1 space-y-2">
              <h1 className="text-5xl font-bold">{selectedPlant?.plantName}</h1>
              <p className="mt-3 text-sm font-semibold text-black">
                Category:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.category}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black">
                Health Status:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.healthStatus}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black">
                Care Level:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.careLevel}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black">
                Water Frequency:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.wateringFrequency}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black">
                Last watered Date:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.lastWateredDate}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black">
                Next Watering Date:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.nextWateringDate}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black">
                Description:{" "}
                <span className="text-[#444444]">
                  {selectedPlant?.description}
                </span>
              </p>
              {/* <p className=" text-sm font-semibold text-black">
                Plant Added Date:{" "}
                <span className="text-[#444444]">
                  {}
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </section>
    );
};

export default PlantDetailsPage;