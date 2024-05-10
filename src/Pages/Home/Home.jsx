import Banner from "../../Component/Banner/Banner";
import Navbar from "../../Component/Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div className=" relative">
      <div className="sticky bg-blue-50 top-0 left-0 right-0">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
