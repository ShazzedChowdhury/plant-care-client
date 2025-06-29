import React, { useEffect, useState } from "react";
import SingleCard from "../../../Components/SingleCard/SingleCard";
import LoadingSpiner from "../../../Components/Loader/LoadingSpiner";

const NewPlantsSec = () => {
  const [plants, setPlants] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b11-a10-mango-plant-care-server.vercel.app/recent-plants")
      .then((res) => res.json())
      .then((data) => {
        if (!showAll) {
          setPlants(data.slice(0, 6));
          setLoading(false);
        } else {
          setPlants(data);
          setLoading(false);
        }
      });
  }, [showAll]);

  if (loading) {
    return <LoadingSpiner />;
  }
 
  return (
    <div className="bg-gray-100 h-fit">
      <h1 className="text-4xl md:text-5xl font-semibold text-center         max-w-screen-xl mx-auto px-5 py-20 ">
        Explore the <span className="text-bold text-accent">Newest Plants</span>
      </h1>
      <div className="max-w-7xl mx-auto px-5 pt-0 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {plants.map((plant) => (
          <SingleCard key={plant?._id} plant={plant} />
        ))}
      </div>
      <div className="flex justify-center py-10">
        {plants.length > 8 && (
          <button
            onClick={() => {
              setShowAll((prev) => !prev);
              showAll &&
                window.scrollTo({
                  top: 500,
                  behavior: "smooth",
                });
            }}
            className="btn btn-primary text-white rounded-full"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewPlantsSec;
