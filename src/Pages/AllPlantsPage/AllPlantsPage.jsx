import { useEffect, useState } from 'react';
import { data, Link, useNavigate } from 'react-router';
import LoadingSpiner from '../../Components/Loader/LoadingSpiner';

const AllPlantsPage = () => {
   const [plants, setPlants] = useState([]);
    const [sort, setSort] = useState('')
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();
 
   useEffect(() => {
       fetch(`https://b11-a10-mango-plant-care-server.vercel.app/all-plants?searchPharams=${sort}`)
         .then((res) => res.json())
         .then((data) => {
          setPlants(data);
          setLoading(false)
         });
   }, [sort])

   if(loading){
     return <LoadingSpiner />
   }
    
    return (
      <section className="max-w-7xl px-5 md:-10 mx-auto py-20 min-h-[calc(100vh-68px-395px)]">
        <div className="mb-5 text-right">
          <select
            name="sortByCareLevel"
            defaultValue="Choose a carelevel"
            className="select select-neutral w-fit focus:outline-none"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={""}>All</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div className="grid grid-cols 1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {plants.map((plant) => {
            console.log(plant);
            return (
              <div key={plant._id} className="card bg-base-100  shadow-sm">
                <figure className="w-full h-[295px]">
                  <img
                    className="object-cover w-full h-full"
                    src={plant?.image}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{plant?.plantName}</h2>
                  <p>{plant?.description}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => navigate(`/all-plants/${plant?._id}`)}
                      className="btn btn-primary btn-sm "
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default AllPlantsPage;