import { useEffect, useState } from "react";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import BlogCard from "./BlogCard";
import { useQuery } from "react-query";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { isLoading } = useQuery({
    queryFn: () => getdata(),
    queryKey: ["jobs"],
  });
  const getdata = async () => {
    const { data } = await axios("https://career-peak-server.vercel.app/blogs");
    setBlogs(data)
    return data;
  };
  return (
    <div>
      <Navbar></Navbar>
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
            <h1 className="mb-5 text-5xl font-bold">
              Here is some blogs for you
            </h1>
            <button className="btn z-30 btn-outline text-blue-400 text-lg ">
              Read Now
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-[1480px] mx-auto">
      {isLoading ? (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-[50px] md:w-[100px] text-blue-400"></span>{" "}
          </div>
        ) : (
          ""
        )}
        <div className=" grid  grid-cols-1  md:grid-cols-2 my-10 gap-16">
            {
                blogs.map(blog=> <BlogCard key={blog._id}  blog={blog}></BlogCard>)
            }
        </div>
      </div>

    </div>
  );
};

export default Blogs;
