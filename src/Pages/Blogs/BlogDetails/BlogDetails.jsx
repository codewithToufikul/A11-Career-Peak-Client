import { useLoaderData } from "react-router-dom";
import Navbar from "../../../Component/Shared/Navbar/Navbar";

const BlogDetails = () => {
    const blog = useLoaderData()
    const {title, writer, date, blogimage, full_blog, _id} = blog;
    return (
        <div>
            <Navbar></Navbar>
            <div className=" max-w-[1480px] mx-auto">
            <div className="py-5 bg-blue-50 my-2 rounded-xl">
          <div className="mb-2 flex items-center justify-between">
            <h1 className=" text-3xl font-semibold p-3 ml-5">{title}</h1>
          </div>
          <div className=" w-[900px] h-[500px] flex mx-auto">
            <img
              className=" w-full h-full rounded-xl"
              src={blogimage}
              alt=""
            />
          </div>

        </div>
        <div className=" max-w-[800px] mx-auto border-blue-100 border-2 rounded-lg hover:shadow-lg">
            <h1 className=" text-3xl bg-gray-50 p-3 font-semibold">
              {title}
            </h1>
            <p className=" text-lg p-4">{full_blog}</p>
          </div>
            </div>
        </div>
    );
};

export default BlogDetails;