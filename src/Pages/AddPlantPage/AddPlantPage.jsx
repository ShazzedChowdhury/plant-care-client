import React, { use } from "react";
import { AuthContext } from "../../Contexts/Firebase/AuthProvider";
import Swal from "sweetalert2";

const AddPlantPage = () => {
    const { user } = use(AuthContext);


    const handleAddPlantForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const inputData = Object.fromEntries(formData.entries());
        

        //send form data in the database
        fetch("https://b11-a10-mango-plant-care-server.vercel.app/plants", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your submission successfully saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
            }
        })

        form.reset()
    }
  return (
    <section className="max-w-7xl mx-auto px-5 md:10 p-10 pb-40 bg-white dark:bg-[#1d232a] min-h-[calc(100vh-68px-395px)]">
      <div className="border border-gray-200 shadow-lg rounded-lg">
        <h1></h1>
        <p></p>
        <form onSubmit={handleAddPlantForm} className="space-y-4 w-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label mb-2">
                <span className="label-text">Plant Name</span>
              </label>
              <input
                type="text"
                name="plantName"
                placeholder="Plant Name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Category</span>
              </label>
              <select name="category" className="select select-bordered w-full">
                <option value="">Select Category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
                <option value="foliage">Foliage</option>
                <option value="bonsai">Bonsai</option>
              </select>
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Care Level</span>
              </label>
              <select
                name="careLevel"
                className="select select-bordered w-full"
              >
                <option value="">Select Care Level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Watering Frequency</span>
              </label>
              <input
                type="text"
                name="wateringFrequency"
                placeholder="e.g., every 3 days"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Last Watered Date</span>
              </label>
              <input
                type="date"
                name="lastWateredDate"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Next Watering Date</span>
              </label>
              <input
                type="date"
                name="nextWateringDate"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">Health Status</span>
              </label>
              <select
                name="healthStatus"
                className="select select-bordered w-full"
              >
                <option value="">Select Health Status</option>
                <option value="healthy">Healthy</option>
                <option value="thriving">Thriving</option>
                <option value="growing">Growing</option>
                <option value="delicate">Delicate</option>
                <option value="stable">Stable</option>
                <option value="fragile">Fragile</option>
              </select>
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label mb-2">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email}
                placeholder="User Email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />
          <button type="submit" className="btn btn-primary text-white w-full">
            Add Plant
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPlantPage;
