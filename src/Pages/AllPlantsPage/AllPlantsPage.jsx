import { useEffect, useState } from 'react';
import { data, Link } from 'react-router';
import LoadingSpiner from '../../Components/Loader/LoadingSpiner';

const AllPlantsPage = () => {
   const [plants, setPlants] = useState([]);
    const [sort, setSort] = useState('')
    const [ loading, setLoading ] = useState(true)
 
   useEffect(() => {
       fetch(`http://localhost:3000/all-plants?searchPharams=${sort}`)
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
      <section className="max-w-7xl px-5 md:-10 mx-auto pt-10 pb-40 min-h-[calc(100vh-464px)]">
        <div>
          <select
            name="sortByCareLevel"
            defaultValue="Choose a carelevel"
            className="select select-neutral w-fit"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={''}>All</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead className="bg-[#444444] text-white">
              <tr>
                <th>No</th>
                <th>Plant Name</th>
                <th>Category</th>
                <th>Watering Frequency</th>
                <th>Care Level</th>
                <th>Heath Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {plants.map((plant, index) => (
                <tr key={plant?._id}>
                  <td>{index + 1}</td>
                  <td>{plant?.plantName}</td>
                  <td>{plant?.category}</td>
                  <td>{plant?.wateringFrequency}</td>
                  <td>{plant?.careLevel}</td>
                  <td>{plant?.healthStatus}</td>
                  <td>
                    <Link
                      to={`/all-plants/${plant?._id}`}
                      className="btn btn-xs"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default AllPlantsPage;