import { useState } from "react";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";


const fetchBlog = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
};

const UpdateJob = () => {
  const navigete = useNavigate()
  const { id } = useParams();

  const { data: job, isLoading, isError } = useQuery(['blog', id], () => fetchBlog(id));
  if (isLoading) return <div className="min-h-screen flex justify-center items-center">
  <span className="loading loading-infinity w-[50px] md:w-[100px] text-blue-400"></span>{" "}
</div>;
  if (isError) return <div>Error fetching blog</div>

  const {_id} = job;

    const handleUpdateJob =  async event =>{
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
        const postingDate = form.jobPostingDate.value;
        const applyTime = form.applicationDeadline.value;
        const updatedJob = {
          jobTitle: title ,
          jobCategory: jobCategory,
          salaryRange: salary,
          jobDescription: description,
          userEmail: email,
          userName: name,
          jobBannerImg: photo,
          jobPostingDate: postingDate,
          applicationDeadline: applyTime,
          jobApplicantsNumber: applyNumber
    
        }
        try{
          const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/jobs/${_id}`, updatedJob)
          console.log(data);
          toast.success('Successfully Update !')
          navigete('/myjobs')
      } catch (err) {
          console.log(err);
          toast.error('Update failed !')
      }
        
    }
    return (
        <div>
        <Navbar></Navbar>
        <div
            className="hero bg-top"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/sVGH3tK/technology-featured-970x276.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md py-24 z-20">
                <h1 className="mb-5 text-5xl font-bold">Update Your Job</h1>
                <p className="mb-5">
                </p>
              </div>
            </div>
          </div>
        <div className="max-w-[1080px] mx-auto">
        <div className="bg-red-50 lg:px-24 px-8 py-10 m-5 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-5">
          Update Your <span className=" text-blue-400">Job</span>
          </h2>
          <form onSubmit={(event)=>handleUpdateJob(event,job._id)}>
                            <div className="md:flex md:mb-4">
                              <div className="form-control md:w-1/2">
                                <label className="label">
                                  <span className="label-text text-base">
                                    Job Title
                                  </span>
                                </label>
                                <label className="input-group">
                                  <input
                                    type="text"
                                    name="title"
                                    required
                                    defaultValue={job.jobTitle}
                                    className="input input-bordered w-full"
                                  />
                                </label>
                              </div>
                              <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                  <span className="label-text text-base">
                                    {" "}
                                    Job Category
                                  </span>
                                </label>
                                <select
                                  name="jobCategory"
                                  defaultValue={job.jobCategory}
                                  required
                                  className="select select-bordered w-full"
                                >
                                  <option disabled selected>
                                    Default: {job.jobCategory}
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
                                    defaultValue={job.userEmail}
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
                                    defaultValue={job.userName}
                                    className="input input-bordered w-full"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="md:flex md:mb-4">
                              <div className="form-control md:w-1/2">
                                <label className="label">
                                  <span className="label-text text-base">
                                    Salary range
                                  </span>
                                </label>
                                <label className="input-group">
                                  <input
                                    type="text"
                                    name="salary"
                                    required
                                    defaultValue={`${job.salaryRange}`}
                                    className="input input-bordered w-full"
                                  />
                                </label>
                              </div>
                              <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                  <span className="label-text text-base">
                                    {" "}
                                    Job Posting Date
                                  </span>
                                </label>
                                <input
                                    type="date"
                                    name="jobPostingDate"
                                    required
                                    defaultValue={job.jobPostingDate}
                                    placeholder="applied number"
                                    className="input input-bordered w-full"
                                  />

                              </div>
                            </div>
                            <div className="md:flex md:mb-4">
                              <div className="form-control md:w-1/2">
                                <label className="label">
                                  <span className="label-text text-base">
                                    Application Deadline
                                  </span>
                                </label>
                                <input
                                    type="date"
                                    name="applicationDeadline"
                                    required
                                    defaultValue={job.applicationDeadline}
                                    placeholder="applied number"
                                    className="input input-bordered w-full"
                                  />

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
                                    defaultValue={job.jobBannerImg}
                                    className="input input-bordered w-full"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className=" mb-3">
                              <div className="form-control w-full">
                                <label className="label">
                                  <span className="label-text">
                                    Job Description
                                  </span>
                                </label>
                                <label className="input-group">
                                  <textarea
                                    name="description"
                                    defaultValue={job.jobDescription}
                                    className=" p-5 w-full h-20 rounded-xl"
                                    id=""
                                  ></textarea>
                                </label>
                              </div>
                            </div>

                            <input
                              type="submit"
                              onClick={()=>handleUpdateJob(job._id)}
                              value="Update Job"
                              className="btn btn-block bg-blue-400 text-lg text-white"
                            />
                          </form>
        </div>
      </div>
      </div>
    );
};

export default UpdateJob;