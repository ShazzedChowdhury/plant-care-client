import { Link, useLoaderData } from 'react-router';

const AllPlantsPage = () => {
    const plants = useLoaderData();
    
    return (
      <section className="max-w-7xl px-5 md:-10 mx-auto py-10 min-h-[calc(100vh-464px)]">
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