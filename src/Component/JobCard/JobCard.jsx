import { FaPeopleGroup } from "react-icons/fa6";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    userName,
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    salaryRange,
    jobApplicantsNumber,
    jobCategory,
    _id
  } = job;
  return (
    <div className=" border-[1px] hover:shadow-lg rounded-md  bg-base-100 ">
      <div className="card-body">
        <div className=" flex justify-between">
        <p className=" ">
          Posted By: <span className="text-lg font-semibold">{userName}</span>
        </p>
        <p className={`${jobCategory === "Hybrid" ? ' bg-green-200 p-1 text-center rounded-full font-semibold text-green-500' : ''}${jobCategory === "Remote" ? ' bg-pink-200 p-1 text-center rounded-full font-semibold text-pink-500' : ''}${jobCategory === "On Site" ? ' bg-yellow-100 p-1 text-center rounded-full font-semibold text-blue-500' : ''}${jobCategory === "Part Time" ? ' bg-blue-100 p-1 text-center rounded-full font-semibold text-blue-500' : ''}`}>
  {jobCategory}
</p>
        </div>
        <h2 className="card-title text-3xl">{jobTitle}</h2>
        <div className=" flex justify-between mt-3">
          <div className=" flex items-center gap-1">
          <p className=" text-lg text-blue-500">
            <MdOutlineDateRange />
          </p>
          <p>
            Posted Date:{" "}
            <span className=" font-semibold">{jobPostingDate}</span>
          </p>
          </div>
          <div className=" flex items-center gap-1">
            <p className=" text-lg text-red-500">
              <MdOutlineDateRange />
            </p>
            <p>
              Deadline:{" "}
              <span className=" font-semibold">{applicationDeadline}</span>
            </p>
          </div>
        </div>
        <div className=" flex">
        <div className=" flex items-center gap-1">
        <p className=" text-lg text-blue-500">
        <FaPeopleGroup />
            </p>
        <p>Applied People: {jobApplicantsNumber}</p>
        </div>
        <div>

        </div>
        </div>
        <div className="card-actions justify-between items-center">
          <h3 className="text-xl ">
            Salary:{" "}
            <span className=" font-medium text-2xl ">${salaryRange}</span>
          </h3>
          <Link to={`/jobdetails/${_id}`} className=" text-lg text-blue-500 border-2 p-2 rounded-full px-3 border-blue-300 flex items-center gap-2">View Details <span className=" text-xl "><IoArrowForwardSharp /></span></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
