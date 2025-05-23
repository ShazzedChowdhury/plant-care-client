import React, { use } from "react";
import Card from "../../../Components/Card/Card";

const fetchPromise = fetch("/top-plant-care-mistake.json").then((res) =>
  res.json()
);
const TopPlantCareMistakeSec = () => {
    const topMistakes = use(fetchPromise);
    
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-20">
      <h1 className="text-4xl md:text-5xl font-semibold text-center         max-w-screen-xl mx-auto px-5 py-20 ">
        Top Plant <span className="text-bold text-accent">Care Mistakes</span>
      </h1>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topMistakes.map((mistake, index) => (
          <Card key={index} index={index} mistake={mistake} />
        ))}
      </div>
    </div>
  );
};

export default TopPlantCareMistakeSec;
