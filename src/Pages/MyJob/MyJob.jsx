import { useContext, useEffect, useState } from "react";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { MdDeleteForever, MdOutlineDateRange } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const MyJob = () => {
  const { users } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/jobsByEmail/${users?.email}`
      );
      setJobs(data);
    };
    getData();
  }, [users]);
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
          <div className="max-w-md py-10 md:py-16 lg:py-24 z-20">
            <h1 className="mb-5 md:text-4xl text-3xl lg:text-5xl font-bold">
              Your Added Jobs
            </h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1480px] mx-auto mt-10">
        <div className=" max-w-[700px] mx-auto text-center">
          <p className=" text-2xl md:text-3xl font-model text-blue-500 font-bold">
            Here is...
          </p>
          <h1 className=" md:text-4xl text-3xl lg:text-5xl font-semibold">
            Your Posted <span className=" text-blue-400">Jobs</span>
          </h1>
          <p className=" text-sm md:text-lg mt-3">
            Are you ready to take the next step in your career journey? Look no
            further! Below, you'll find the details of the .
          </p>
        </div>
        <div className="overflow-x-auto my-8">
          <table className="table border-2 lg:table-md md:table-sm ">
            <thead className=" bg-gray-100">
              <tr>
                <th></th>
                <th className=" md:text-base lg:text-lg md:font-bold">
                  Job Name
                </th>
                <th className=" md:text-base lg:text-lg md:font-bold">
                  Category
                </th>
                <th className=" md:text-base lg:text-lg md:font-bold">
                  Salary Range
                </th>
                <th className=" md:text-base lg:text-lg md:font-bold">
                  Posting Date
                </th>

                <th className=" md:text-base lg:text-lg md:font-bold">
                  Applications
                </th>
                <th className=" md:text-base lg:text-lg md:font-bold">
                  Post By
                </th>
                <td className="md:text-base lg:text-lg md:font-bold ">
                  Description
                </td>
                <th className=" md:text-base lg:text-lg md:font-bold text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td className=" md:text-base text-xs font-semibold">
                    {job.jobTitle}
                  </td>
                  <td
                    className={` md:text-base text-xs ${
                      job.jobCategory === "Hybrid" ? " text-green-500" : ""
                    }${job.jobCategory === "Remote" ? "  text-pink-500" : ""}${
                      job.jobCategory === "On Site" ? "  text-yellow-500" : ""
                    }${
                      job.jobCategory === "Part Time" ? "  text-blue-500" : ""
                    }`}
                  >
                    {job.jobCategory}
                  </td>
                  <td className=" md:text-base text-xs font-medium">
                    ${job.salaryRange}
                  </td>
                  <td className=" flex md:text-base text-xs items-center gap-1">
                    {" "}
                    <span className=" text-lg lg:block hidden text-blue-500">
                      <MdOutlineDateRange />{" "}
                    </span>{" "}
                    {job.jobPostingDate}
                  </td>
                  <td className=" ">
                    <div className=" flex md:text-base text-xs gap-1 items-center">
                      <span className=" text-lg lg:block hidden text-red-500">
                        <MdOutlineDateRange />{" "}
                      </span>
                      <p>{job.applicationDeadline}</p>
                    </div>
                  </td>

                  <td className=" md:text-base text-xs">{job.userName}</td>

                  <td>{job.jobDescription.slice(0, 20)}...</td>
                  <td className=" ">
                    <div className=" justify-center flex gap-3">
                    <Link to={`/updatejob/${job._id}`}
                        className="btn btn-outline btn-info md::text-xl"
                      >
                        <FiEdit />
                      </Link>
                      <button className="btn btn-outline btn-error text-lg md:text-[26px]">
                        <MdDeleteForever />
                      </button>
                    </div>
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

export default MyJob;
