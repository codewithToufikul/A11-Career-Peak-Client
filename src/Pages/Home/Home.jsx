import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import FindJob from "../../Component/FindJob/FindJob";
import JobCategory from "../../Component/JobCategory/JobCategory";
import Navbar from "../../Component/Shared/Navbar/Navbar";

const Home = () => {
   const jobs = useLoaderData();

  return (
    <div className=" relative">
      <div className="sticky bg-blue-50 top-0 left-0 right-0">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className=" max-w-[1480px] mt-[70px] mx-auto">
        <FindJob></FindJob>
      </div>
      <div className=" max-w-[1480px] mx-auto mt-[100px]">
      <JobCategory jobs={jobs} ></JobCategory>
      </div>
      
    </div>
  );
};

export default Home;
