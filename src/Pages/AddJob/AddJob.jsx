import { Toaster } from "react-hot-toast";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddJob = () => {
    const {users} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddTourist =event =>{
        event.preventDefault()
        const form = event.target;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const touristSpot = {
          spotName: spotName,
          country: country,
          location: location,
          description: description,
          cost: cost,
          seasonality: seasonality,
          time: time,
          visitors: visitors,
          email: email,
          name: name,
          photo: photo,
    
        }
        console.log(touristSpot);
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1480px] mx-auto">
      <div className="bg-blue-50 lg:px-24 px-8 py-16 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-5">
          Add a <span className=" text-blue-400">Job</span>
        </h2>
        <form onSubmit={handleAddTourist}>

          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="spotName"
                  required
                  placeholder="tourist spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base"> Job Category</span>
              </label>
              <select name="country" required className="select select-bordered w-full">
                <option disabled selected>
                  Select Job Category
                </option>
                <option> On Site</option>
                <option>Remote</option>
                <option> Part-Time</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  required
                  defaultValue={users?.email}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  required
                  defaultValue={users?.displayName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Salary range</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="cost"
                  required
                  placeholder=" salary range"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base"> Job Posting Date</span>
              </label>
              <ReactDatePicker className=" w-full py-3 px-5 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Travel Time</span>
              </label>
              <select name="time" required className="select select-bordered w-full ">
                <option disabled selected>
                  Travel Time
                </option>
                <option>3 days</option>
                <option>7 days</option>

                <option>15 days</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">
                  Tota Visitors Per Year
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="visitors"
                  required
                  placeholder="visitors number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="photo"
                  required
                  placeholder="photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Spot"
            className="btn btn-block bg-blue-400 text-lg text-white"
          />
        </form>
      </div>
      <Toaster />
    </div>
    </div>
  );
};

export default AddJob;
