import Banner from "../../Component/Banner/Banner";
import ClientReview from "../../Component/ExtraSection/ClientReview/ClientReview";
import NewaLatter from "../../Component/ExtraSection/NewaLatter/NewaLatter";
import FindJob from "../../Component/FindJob/FindJob";
import JobCategory from "../../Component/JobCategory/JobCategory";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([])
useEffect(()=>{
  const getData = async () =>{
    const {data} = await  axios(`${import.meta.env.VITE_API_URL}/jobs`, )
    setJobs(data)
  }
  getData()
},[])

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
      <div>
        <ClientReview></ClientReview>
      </div>
      <div>
        <NewaLatter></NewaLatter>
      </div>
    </div>
  );
};

export default Home;
