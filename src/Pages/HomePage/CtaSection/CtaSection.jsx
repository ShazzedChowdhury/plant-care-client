import React from "react";
import gardinerImag from "../../../assets/gardiner.png"
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <div className="px-5 flex flex-col md:flex-row justify-between items-end max-w-7xl mx-auto md:px-10 ">
      <div className="flex flex-col gap-y-5 flex-1 py-30">
        <h2 className="text-5xl font-bold text-white">
          Bring Nature Into Your Home
        </h2>
        <p className="text-lg font-semibold text-white">
          Explore our beautiful collection of indoor and outdoor plants. Perfect
          for every space, mood, and season.
        </p>
        <Link to="/all-plants" class="btn btn-neutral btn-lg w-fit">See All Plants</Link>
      </div>
      <div className="flex-1 flex justify-end items-end">
        <img className="max-w-lg w-full" src={gardinerImag} alt="cta image" />
      </div>
    </div>
  );
};

export default CtaSection;
