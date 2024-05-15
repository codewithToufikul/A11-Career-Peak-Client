import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { MdOutlineDateRange } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useQuery } from "react-query";

const JobDetails = () => {
  const { users } = useContext(AuthContext);
  const job = useLoaderData();
  const queryClient = useQueryClient(); 

  const [isLoading, setIsLoading] = useState(false); 

  const {
    userName,
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    salaryRange,
    jobApplicantsNumber,
    jobCategory,
    _id,
    jobBannerImg,
    jobDescription,
    userEmail,
  } = job;

  const { data: jobs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["jobs"],
  });

  const getData = async () => {
    const { data } = await axios(`https://career-peak-server.vercel.app/applyjob`);
    return data;
  };

  const handleConfirmApply = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;
    const jobId = _id;
    const ApplicationEmail = form.email.value;
    const ApplicationName = form.name.value;
    const resume = form.resume.value;
    const today = new Date();
    const deadline = new Date(applicationDeadline);

    if (deadline < today) {
      toast.error("Deadline Over !");
      setIsLoading(false);
      return;
    }

    if (ApplicationEmail === userEmail) {
      toast.error("You can't apply for your own job.");
      setIsLoading(false);
      return;
    }

    if (
      jobs.find(
        (job) =>
          job.jobId === jobId && job.ApplicationEmail === ApplicationEmail
      )
    ) {
      toast.error("Already applied!");
      setIsLoading(false);
      return;
    }

    const applyData = {
      userName,
      userEmail,
      jobTitle,
      jobPostingDate,
      applicationDeadline,
      salaryRange,
      jobApplicantsNumber,
      jobCategory,
      jobId,
      jobBannerImg,
      jobDescription,
      ApplicationEmail,
      ApplicationName,
      resume,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/applyjob`,
        applyData
      );
      console.log(data);
      toast.success("Job application successful");

      await queryClient.invalidateQueries("jobs");
    } catch (err) {
      console.error(err);
      toast.error("Failed to apply for the job");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero bg-top"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/YyS12Kf/damian-zaleski-RYyr-k3-Ysqg-unsplash-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-16 z-20">
            <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
            <p className="mb-5">
              Sure, feel free to provide the text related to the job details,
              and I can help you understand or analyze it.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-[70px] max-w-[1480px] mt-7 mx-auto">
        <div className="py-5 bg-blue-50 my-2 rounded-xl">
          <div className="mb-2 flex items-center justify-between">
            <h1 className=" md:text-2xl text-lg lg:text-5xl font-semibold p-3 ml-5">
              {jobTitle}
            </h1>

            <p
              className={`${
                jobCategory === "Hybrid"
                  ? " bg-green-200 p-1 text-center rounded-full font-semibold text-green-500"
                  : ""
              }${
                jobCategory === "Remote"
                  ? " bg-pink-200 p-1 text-center rounded-full font-semibold text-pink-500"
                  : ""
              }${
                jobCategory === "On Site"
                  ? " bg-yellow-100 p-1 text-center rounded-full font-semibold text-blue-500"
                  : ""
              }${
                jobCategory === "Part Time"
                  ? " bg-blue-100 p-1 text-center rounded-full font-semibold text-blue-500"
                  : ""
              } px-3 text-lg mr-6`}
            >
              {jobCategory}
            </p>
          </div>
          <div className=" px-2 max-w-[900px] max-h-[500px] flex mx-auto">
            <img className=" w-full rounded-xl" src={jobBannerImg} alt="" />
          </div>
        </div>
        <div className=" grid lg:grid-cols-5 lg:gap-9 lg:mx-12">
          <div className=" lg:col-span-3 m-2 border-blue-100 border-2 rounded-lg hover:shadow-lg">
            <h1 className=" text-xl md:text-3xl bg-gray-50 p-3 font-semibold">
              Job Description
            </h1>
            <p className=" text-lg p-4">{jobDescription}</p>
          </div>
          <div className="  bg-blue-100 pb-4 rounded-xl col-span-2">
            <h1 className=" rounded-t-xl text-2xl md:text-3xl font-semibold p-3 bg-blue-200">
              Overview
            </h1>
            <h1 className=" underline text-xl md:text-2xl font-semibold text-center my-3">
              {jobTitle}
            </h1>
            <div className=" flex items-center justify-between px-4 py-2">
              <div>
                <div className=" flex items-center gap-1">
                  <p className=" lg:text-lg text-blue-500">
                    <MdOutlineDateRange />
                  </p>
                  <p className=" lg:text-xl">
                    Posted Date:{" "}
                    <span className=" font-semibold">{jobPostingDate}</span>
                  </p>
                </div>
                <div className=" mt-3 flex items-center gap-1">
                  <p className=" lg:text-lg text-blue-500">
                    <MdOutlineDateRange />
                  </p>
                  <p className=" lg:text-xl">
                    Deadline:{" "}
                    <span className=" font-semibold">
                      {applicationDeadline}
                    </span>
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-1">
                <p className=" lg:text-lg text-blue-500">
                  <FaPeopleGroup />
                </p>
                <p className=" lg:text-xl">
                  Applied People: {jobApplicantsNumber}
                </p>
              </div>
            </div>
            <div className=" mt-2 px-5">
              <h2 className=" text-2xl">
                Salary:{" "}
                <span className=" text-blue-500 font-bold">${salaryRange}</span>
              </h2>
              <button
                className="btn w-full bg-blue-400 mt-5 text-lg text-white"
                onClick={() => document.getElementById("my_modal_2").showModal()}
                disabled={isLoading}
              >
                {isLoading ? "Applying..." : "Apply Now"}
              </button>

              <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-5">
                  <h3 className="font-bold text-center text-xl my-5">
                    Confirm Your Job Apply
                  </h3>

                  <form onSubmit={handleConfirmApply}>
                    <div className="md:flex md:mb-4">
                      <div className="form-control md:w-1/2">
                        <label className="label">
                          <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                          <input
                            type="email"
                            name="email"
                            value={users?.email}
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
                            value={users?.displayName}
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">
                          Enter Your Resume Link
                        </span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="resume"
                          required
                          placeholder="Submit resume link"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                    <button className=" my-5 bg-blue-400 text-lg text-white btn w-full">
                      Confirm Apply
                    </button>
                  </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
