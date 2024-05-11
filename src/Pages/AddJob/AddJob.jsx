import { Toaster } from "react-hot-toast";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddJob = () => {
    const {users} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [applyDate, setApplyDate] = useState(new Date());
    

    const handleAddTourist =event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const jobCategory = form.jobCategory.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const applyNumber = form.applyNumber.value;
        const postingDate = startDate.toISOString().split('T')[0];
        const applyTime = applyDate.toISOString().split('T')[0];
        const touristSpot = {
            title: title ,
          jobCategory: jobCategory,
          salary: salary,
          description: description,
          email: email,
          name: name,
          photo: photo,
          postingDate: postingDate,
          applyDate: applyTime,
          applyNumber: applyNumber
    
        }
        console.log(touristSpot);
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1080px] mx-auto">
      <div className="bg-blue-50 lg:px-24 px-8 py-10 m-5 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-5">
          Add A <span className=" text-blue-400">Job</span>
        </h2>
        <form onSubmit={handleAddTourist}>

          <div className="md:flex md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="job title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base"> Job Category</span>
              </label>
              <select name="jobCategory" required className="select select-bordered w-full">
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
          <div className="md:flex md:mb-4">
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
          <div className="md:flex md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Salary range</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="salary"
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
              <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full"
                  readOnly
                />
            </div>
          </div>
          <div className="md:flex md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Application Deadline</span>
              </label>
              <ReactDatePicker className=" w-full py-3 px-5 rounded-lg" selected={applyDate} onChange={(date) => setApplyDate(date)} />
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">
                  Applied Jobs Number
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="applyNumber"
                  required
                  value={0}
                  placeholder="applied number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className=" mb-4">
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
          <div className=" mb-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <label className="input-group">
                <textarea name="description" placeholder=" Enter some job details" className=" p-5 w-full h-20 rounded-xl" id=""></textarea>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Job"
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
