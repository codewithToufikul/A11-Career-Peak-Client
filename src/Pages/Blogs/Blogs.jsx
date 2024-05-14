import { useEffect, useState } from "react";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
    .then(res=> res.json())
    .then(data=>{
        setBlogs(data)
    })
  }, []);
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
