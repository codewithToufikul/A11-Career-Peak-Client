import axios from "axios";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiFilter } from "react-icons/ci";
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const JobPDF = ({ job }) => (
  <Document>
    <Page>
      <Text>
        {job.jobTitle},{job.jobPostingDate}, {job.applicationDeadline}, ${job.salaryRange}, {job.jobCategory},{job.ApplicationEmail}
      </Text>
    </Page>
  </Document>
);

const AppliedJobs = () => {
  const { users } = useContext(AuthContext);
  const [appliedjobs, setAppliedjobs] = useState([]);
  const { data: jobs = [], isLoading } = useQuery({
    queryFn: () => getdata(),
    queryKey: ["jobs"],
  });

  const getdata = async () => {
    const { data } = await axios("http://localhost:5000/applyjob");
    return data;
  };

  const nyJob = jobs.filter((job) => job.ApplicationEmail === users.email);

  useEffect(() => {
    setAppliedjobs(nyJob);
  }, [jobs]);

  const handleAll = () => {
    setAppliedjobs(nyJob);
  };

  const handleRemote = () => {
    const remote = nyJob.filter((job) => job.jobCategory === "Remote");
    setAppliedjobs(remote);
  };
  const handleOn = () => {
    const remote = nyJob.filter((job) => job.jobCategory === "On Site");
    setAppliedjobs(remote);
  };
  const handlePart = () => {
    const remote = nyJob.filter((job) => job.jobCategory === "Part Time");
    setAppliedjobs(remote);
  };
  const handleHybrid = () => {
    const remote = nyJob.filter((job) => job.jobCategory === "Hybrid");
    setAppliedjobs(remote);
  };

  return (
    <div>
      <Navbar />
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://www.allianzegcc.com/wp-content/uploads/2021/03/How-to-do-an-awesome-Blog-Writing-in-easy-steps-735x349-min.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-12 z-20">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Your Applied Job</h1>
          </div>
        </div>
      </div>
        <div className=" flex justify-center mt-7">
        <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 bg-blue-300 text-lg text-white">
                Filter By
                <span className="text-xl font-bold">
                  <CiFilter />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={handleAll}>
                  <a>All Job</a>
                </li>
                <li onClick={handleRemote}>
                  <a>Remote Job</a>
                </li>
                <li onClick={handleOn}>
                  <a>On Site</a>
                </li>
                <li onClick={handlePart}>
                  <a>Part Time</a>
                </li>
                <li onClick={handleHybrid}>
                  <a>Hybrid</a>
                </li>
              </ul>
            </div>
        </div>
      <div className="max-w-[1480px] mx-auto overflow-x-auto">
        {isLoading ? (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-[50px] md:w-[100px] text-blue-400"></span>{" "}
          </div>
        ) : (
          ""
        )}
        <div>
          <div className="flex justify-center my-7">

          </div>
          <table className="table min-w-max">
            <thead>
              <tr>
                <th className="text-xl">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl text-blue-500">
                      <PiHandbagSimpleFill />
                    </p>
                    <p>Job Title</p>
                  </div>
                </th>
                <th className="text-xl flex items-center gap-2">
                  <p className="text-xl text-blue-500">
                    <MdOutlineDateRange />
                  </p>
                  Posting Date
                </th>
                <th className="text-xl">
                  <div className="flex items-center gap-2">
                    <p className="text-xl text-blue-500">
                      <MdOutlineDateRange />
                    </p>
                    <p>Deadline</p>
                  </div>
                </th>
                <th className="text-xl">Salary range</th>
                <th className="text-xl">Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appliedjobs.map((job) => (
                <tr key={job._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <p>
                          <GrStatusGoodSmall />
                        </p>
                        <p className="font-bold text-2xl py-4">{job.jobTitle}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="bg-blue-100 w-fit p-1 px-3 rounded-full">
                      <span className="font-semibold text-lg">{job.jobPostingDate}</span>
                    </p>
                  </td>
                  <td>
                    <p className="bg-red-100 w-fit p-1 px-3 rounded-full">
                      <span className="font-semibold text-lg">{job.applicationDeadline}</span>
                    </p>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <p className="text-xl">
                        <FaMoneyBill1Wave />
                      </p>
                      <p className="text-xl bg-green-50 p-1 px-2 rounded-full">${job.salaryRange}</p>
                    </div>
                  </td>
                  <td>
                    <p className={`${job.jobCategory === "Hybrid" ? 'bg-green-200 p-1 text-center rounded-full font-semibold text-green-500' : ''}${job.jobCategory === "Remote" ? 'bg-pink-200 p-1 text-center rounded-full font-semibold text-pink-500' : ''}${job.jobCategory === "On Site" ? 'bg-yellow-100 p-1 text-center rounded-full font-semibold text-blue-500' : ''}${job.jobCategory === "Part Time" ? 'bg-blue-100 p-1 text-center rounded-full font-semibold text-blue-500' : ''}`}>
                      {job.jobCategory}
                    </p>
                  </td>
                  <td>
                    <button className=" btn btn-outline text-blue-300 ">
                      <PDFDownloadLink document={<JobPDF job={job} />} fileName={`${job.jobTitle}.pdf`}>
                        {({ blob, url, loading, error }) =>
                          loading ? 'Loading document...' : 'Download PDF'
                        }
                      </PDFDownloadLink>
                    </button>
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

export default AppliedJobs;
