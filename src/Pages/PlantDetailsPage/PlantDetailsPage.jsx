import { format } from 'date-fns';
import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetailsPage = () => {
    const selectedPlant = useLoaderData();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })    
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
              <p className="mt-3 text-sm font-semibold text-black dark:text-white">
                Category:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.category}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Health Status:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.healthStatus}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Care Level:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.careLevel}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Water Frequency:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.wateringFrequency}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Last watered Date:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.lastWateredDate}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Next Watering Date:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.nextWateringDate}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Description:{" "}
                <span className="text-neutral font-normal">
                  {selectedPlant?.description}
                </span>
              </p>
              <p className=" text-sm font-semibold text-black dark:text-white">
                Plant Added Date:{" "}
                <span className="text-neutral font-normal">
                  {format(new Date(selectedPlant?.plantAddedAt), "PPp")}
                </span>
              </p>
              {selectedPlant.lastUpdatedDate && (
                <p className=" text-sm font-semibold text-black dark:text-white">
                  Plant Updated Date:{" "}
                  <span className="text-neutral font-normal">
                    {format(new Date(selectedPlant?.lastUpdatedDate), "PPp")}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
};

export default PlantDetailsPage;