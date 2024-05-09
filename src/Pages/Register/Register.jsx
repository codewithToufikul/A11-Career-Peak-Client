import { FaGithub, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero-content my-10 mt-16 m-5 mx-auto ">
        <div className="relative card max-w-3xl p-12 w-full bg-blue-50">
            <div className=" absolute top-[-50px] rounded-full border-[10px] border-white p-5 left-[42%] bg-[#378CE7]" ><p className=" text-white text-5xl"><FaRegUser /></p></div>
            <h1 className=" mt-4 text-4xl text-center font-semibold">Create Account</h1>
          <form className="card-body">
            <div className="form-control">
              <input type="text" placeholder="Enter Your Name" className="input text-lg input-bordered rounded-full py-7 " required />
            </div>
            <div className="form-control">
              <input type="email" placeholder="Enter Email Address" className="input mt-3 text-lg input-bordered rounded-full py-7 " required />
            </div>
            <div className="relative form-control">
              <input type="password" placeholder="Enter Password" className="input input-bordered rounded-full py-7 mt-3 text-lg" required />
            </div>
            <div className="relative form-control">
              <input type="url" placeholder="Photo URL" className="input input-bordered rounded-full py-7 mt-3 text-lg" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn  text-lg text-white bg-[#67C6E3] rounded-full ">Register</button>
            </div>
          </form>
          <div className="divider px-10">OR</div>
          <div className=" mt-4 flex md:flex-row flex-col items-center justify-center gap-6">
                <button  className="btn hover:shadow-2xl hover:text-black border-blue-700 bg-transparent hover:bg-transparent btn-outline btn-wide text-4xl px-5"><FcGoogle /> <span className=" text-xl">Google</span></button>
                <button className="btn hover:shadow-2xl bg-transparent hover:bg-transparent border-blue-700 hover:text-black btn-outline btn-wide text-4xl px-5"><FaGithub /> <span className=" text-xl">GitHub</span></button>
            </div>
            <h1 className=" text-lg text-center mt-5">
            Already have an account?<Link to="/login" className=" text-[#5356FF] font-semibold">Sign In</Link>
            </h1>
        </div>
      </div>
    );
};

export default Register;