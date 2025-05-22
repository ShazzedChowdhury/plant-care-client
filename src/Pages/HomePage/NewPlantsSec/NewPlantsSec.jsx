import React, { use, useEffect, useState } from 'react';
import SingleCard from '../../../Components/SingleCard/SingleCard';


const NewPlantsSec = () => {
    const [ plants, setPlants ] = useState([]);
    const [ showAll, setShowAll ] = useState(false);
   
    console.log(plants)
    useEffect(() => {
        fetch("http://localhost:3000/recent-plants")
        .then((res) => res.json())
        .then(data => {
            if(!showAll){
                setPlants(data.slice(0, 6));
            } else {
                setPlants(data);
            }
        })
    }, [showAll])
  
    return (
      <div className="bg-gray-100 h-fit">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
                plants.map(plant => <SingleCard key={plant?._id} plant={plant} />)
            }
        </div>
        <div className='flex justify-center py-10'>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="btn btn-primary text-white rounded-full"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    );
};

export default NewPlantsSec;