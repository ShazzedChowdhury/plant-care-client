import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import EmptyList from '../../Components/EmptyList/EmptyList';


const MyPlantsPage = () => {
    const initialData = useLoaderData();
    const [ myPlants, setMyPlants ] = useState(initialData)


    const deleteEntry = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/my-plants/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.deletedCount) {
                const remainingPlants = myPlants.filter(plant => plant?._id !== id)

                setMyPlants(remainingPlants)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your data has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });
    };

    if(myPlants.length === 0) {
       return <EmptyList />
    }

    return (
      <section className="max-w-7xl px-5 md:-10 mx-auto pt-10 pb-40 min-h-[calc(100vh-464px)]">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table max-w-sm md:max-w-full">
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
              {myPlants.map((plant, index) => (
                <tr key={plant?._id}>
                  <td>{index + 1}</td>
                  <td>{plant?.plantName}</td>
                  <td>{plant?.category}</td>
                  <td>{plant?.wateringFrequency}</td>
                  <td>{plant?.careLevel}</td>
                  <td>{plant?.healthStatus}</td>
                  <td className="flex flex-col md:flex-row gap-2">
                    <Link
                      to={`/update-plants/${plant?._id}`}
                      className="btn btn-xs"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() =>
                        deleteEntry(plant?._id)
                      }
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default MyPlantsPage;