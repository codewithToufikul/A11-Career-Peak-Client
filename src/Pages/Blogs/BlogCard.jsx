import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const {title, writer, date, blogimage, full_blog, _id} = blog;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className=" h-[400px] w-full">
        <img
        className=" h-full w-full"
          src={blogimage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className=" flex justify-between mb-2">
            <h2 className=" text-lg"> Post By: {writer}</h2>
            <h2 className=" text-lg"> date: {date}</h2>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className=" text-base">{full_blog.slice(0,300)}...</p>
        <div className="card-actions ">
          <Link to={`/blogdetail/${_id}`} className="btn btn-primary btn-outline">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
