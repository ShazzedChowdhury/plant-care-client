import React, { use } from "react";

const fetchPromise = fetch("/beginner-friendly-plants.json").then((res) =>
  res.json()
);
const BeginnerFriendlyPlantsSec = () => {
  const plants = use(fetchPromise);
 
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-20">
      <h1 className="text-4xl md:text-5xl font-semibold text-center         max-w-screen-xl mx-auto px-5 py-20 ">
        Perfect Plants for{" "}
        <span className="text-bold text-accent">Beginners</span>
      </h1>
      <div className="grid gap-8 row-gap-5 md:grid-cols-2 ">
        {plants.map((plant, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border p-2 rounded-sm border-[#a6c1a0]"
          >
            <img
              src={plant?.image}
              className="w-40 h-40 rounded-sm"
              alt="Plant image"
            />
            <div>
              <h1 className="text-lg font-semibold text-[#000]">
                {plant?.name}
              </h1>
              <p className="text-sm font-normal text-[#444]">
                <span className="font-semibold">Category: </span>
                {plant?.category}
              </p>
              <p className="text-sm font-normal text-[#444]">
                <span className="font-semibold">Care Level: </span>
                {plant?.careLevel}
              </p>
              <p className="text-sm font-normal text-[#444]">
                <span className="font-semibold">Water Frequency: </span>
                {plant?.waterFrequency}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeginnerFriendlyPlantsSec;
