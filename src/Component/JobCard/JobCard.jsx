const JobCard = ({job}) => {
    const {userName, jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobApplicantsNumber, } = job;
  return (
    <div className=" border-[1px] rounded-md  bg-base-100 ">
      <div className="card-body">
        <p className=" ">Posted By: <span className="text-lg font-semibold">{userName}</span></p>
        <h2 className="card-title text-3xl">{jobTitle}</h2>
        <div className=" flex">
        <p>Posted Date: <span className="text-lg font-semibold">{jobPostingDate}</span></p>
        <p>Deadline: {applicationDeadline}</p>
        </div>
        <p>Applied People: {jobApplicantsNumber}</p>
        <div className="card-actions justify-between items-center">
            <h3 className="text-xl ">Salary: <span className=" font-medium text-2xl ">${salaryRange}</span></h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
