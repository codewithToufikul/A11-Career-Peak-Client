import { useQuery } from 'react-query';
import Navbar from "../../../Component/Shared/Navbar/Navbar";
import { useParams } from 'react-router-dom';

const fetchBlog = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
};

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, isError } = useQuery(['blog', id], () => fetchBlog(id));

  if (isLoading) return <div className="min-h-screen flex justify-center items-center">
  <span className="loading loading-infinity w-[50px] md:w-[100px] text-blue-400"></span>{" "}
</div>;
  if (isError) return <div>Error fetching blog</div>;

  const { title, blogimage, full_blog,} = blog;

  return (
    <div>
      <Navbar />
      <div className="max-w-[1480px] mx-auto">
        <div className="py-5 bg-blue-50 my-2 rounded-xl">
          <div className="mb-2 flex items-center justify-between">
            <h1 className="text-3xl font-semibold p-3 ml-5">{title}</h1>
          </div>
          <div className="w-[900px] h-[500px] flex mx-auto">
            <img
              className="w-full h-full rounded-xl"
              src={blogimage}
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[800px] mx-auto border-blue-100 border-2 rounded-lg hover:shadow-lg">
          <h1 className="text-3xl bg-gray-50 p-3 font-semibold">
            {title}
          </h1>
          <p className="text-lg p-4">{full_blog}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
