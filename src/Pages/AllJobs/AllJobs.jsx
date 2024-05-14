import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { MdOutlineDateRange } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaMagnifyingGlass, FaMoneyBill1Wave } from "react-icons/fa6";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
    const {users} = useContext(AuthContext)
  useEffect(()=>{
    const getData = async () =>{
      const {data} = await  axios(`${import.meta.env.VITE_API_URL}/jobs`, )
      setJobs(data)
    }
    getData()
  },[])
  const handleViewDetails = () => {
    if (!users) {
      toast.error('Please login first and view details!');
    } else {
     navigate(`/jobdetails/${_id}`)
    }
  };
  return (
    <div>
      <Navbar></Navbar>
    <div
          className="hero"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/0QjfcwZ/360-F-461786064-F3-YOEPkva-LDM0-Ex-UYct-Xvw-KMMn6q2bs-G.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md py-12 z-20">
              <h1 className="mb-5 text-5xl font-bold">All Jobs</h1>
              <p className="mb-5">
              Unlock Your Potential: Navigate Through Our Diverse Range of Job Opportunities and Find Your Perfect Fit Today
              </p>
              <button className="btn z-30 btn-outline text-blue-400 text-lg ">Explore Now</button>
            </div>
          </div>
        </div>  
      <div className=" max-w-[1480px] mt-16 mx-auto">
        
          <div className=" w-fit mx-auto">
            <div className=" flex items-center">
            <p className=" text-4xl text-blue-400"><FaMagnifyingGlass /></p>
            <h1 className="text-2xl text-center font-semibold mb-5 dark:text-blue-400"> Search By Job Title</h1>
            </div>
          <div className="join">
  <input className="input input-bordered join-item border-blue-100" placeholder="Job Title"/>
  <button className="btn join-item bg-blue-100">Search</button>
</div>
          </div>
        <div className="overflow-x-auto mt-12">
          <table className="table">
            <thead>
              <tr>
                <th className=" text-xl ">
                  <div className=" flex items-center gap-2">
                    <p className=" text-2xl text-blue-500">
                      <PiHandbagSimpleFill />
                    </p>
                    <p>Job Title</p>
                  </div>
                </th>
                <th className=" text-xl flex items-center gap-2">
                  {" "}
                  <p className=" text-xl text-blue-500">
                    <MdOutlineDateRange />
                  </p>
                  Posting Date
                </th>
                <th className=" text-xl">
                  <div className=" flex items-center gap-2">
                    <p className=" text-xl text-blue-500">
                      <MdOutlineDateRange />
                    </p>
                    <p>Deadline</p>
                  </div>
                </th>
                <th className=" text-xl">Salary range</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {jobs.map((job) => (
                <tr className="" key={job._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className=" flex items-center gap-2">
                        <p>
                          <GrStatusGoodSmall />
                        </p>
                        <p className="font-bold text-2xl py-4">
                          {job.jobTitle}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className=" bg-blue-100 w-fit p-1 px-3  rounded-full">
                      <span className=" font-semibold text-lg">
                        {job.jobPostingDate}
                      </span>
                    </p>
                  </td>
                  <td>
                    <p className=" bg-red-100 w-fit p-1 px-3  rounded-full">
                      <span className=" font-semibold text-lg">
                        {job.applicationDeadline}
                      </span>
                    </p>
                  </td>
                  <th>
                    <div className=" flex items-center gap-2">
                      <p className=" text-xl">
                        <FaMoneyBill1Wave />
                      </p>
                      <p className=" text-xl bg-green-50 p-1 px-2 rounded-full">
                        ${job.salaryRange}
                      </p>
                    </div>
                  </th>
                  <td></td>
                  <td>
                    <Link onClick={handleViewDetails} to={`/jobdetails/${job._id}`} className=" btn btn-outline text-lg text-blue-300">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
