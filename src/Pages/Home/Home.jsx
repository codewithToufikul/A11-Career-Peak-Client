import { useQuery } from "react-query";
import Banner from "../../Component/Banner/Banner";
import ClientReview from "../../Component/ExtraSection/ClientReview/ClientReview";
import NewaLatter from "../../Component/ExtraSection/NewaLatter/NewaLatter";
import FindJob from "../../Component/FindJob/FindJob";
import JobCategory from "../../Component/JobCategory/JobCategory";
import Navbar from "../../Component/Shared/Navbar/Navbar";

const Home = () => {

const { data: jobs, isLoading, isError } = useQuery("jobs", async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});

if (isLoading) return <div className="min-h-screen flex justify-center items-center">
<span className="loading loading-infinity w-[50px] md:w-[100px] text-blue-400"></span>{" "}
</div>;
if (isError) return <div>Error fetching data</div>;
  return (
    <div className=" relative">
      <div className="sticky z-50 bg-blue-50 top-0 left-0 right-0">
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
      <div className=" mb-10">
        <NewaLatter></NewaLatter>
      </div>
    </div>
  );
};

export default Home;
