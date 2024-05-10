import { FaGithub, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {loginUser, googleLogin, gitHubLogin} = useContext(AuthContext)
  
  const handleLogin = event =>{
    event.preventDefault()
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    loginUser(email, password)
    .then(result=>{
      toast.success('successfully logged!')
      console.log(result);
    })
    .catch(error=>{
      toast.error(error.message)
      console.error(error);
    })
  };
  const handleGoogle = () =>{
    googleLogin()
    .then(result=>{
      toast.success('successfully logged!')
      console.log(result);
    })
    .catch(error=>{
      toast.error(error.message)
      console.error(error);
    })
  }
  const handleGithub = ()=>{
    gitHubLogin()
    .then((result) => {
      toast.success('successfully logged!')
      console.log(result);
    }).catch((error) => {
      toast.error(error.message)
      console.log(error);
    });
  }
  return (
    
    <div>
      <Navbar></Navbar>
      <div className="hero-content max-w-full py-10 m-5 mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/4RQtvq7/Friendly-Ones-Friendly-Blobs.png)'}}>
        <div className="relative card max-w-3xl p-12 w-full bg-blue-50">
          <div className=" absolute top-[-50px] rounded-full border-[10px] border-white p-5 left-[42%] bg-[#378CE7]">
            <p className=" text-white text-5xl">
              <FaRegUser />
            </p>
          </div>
          <h1 className=" mt-4 text-4xl text-center font-semibold">
            Hi, Welcome Back!
          </h1>
          <p className=" text-base text-center mt-3">
            Enter username and password to log on:
          </p>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="input text-lg input-bordered rounded-full py-7 "
                required
              />
            </div>
            <div className="relative form-control">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered rounded-full py-7 mt-3 text-lg"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  text-lg text-white bg-[#67C6E3] rounded-full ">
                Login
              </button>
            </div>
          </form>
          <div className="divider px-10">OR</div>
          <div className=" mt-4 flex md:flex-row flex-col items-center justify-center gap-6">
            <button onClick={handleGoogle} className="btn hover:shadow-2xl hover:text-black border-blue-700 bg-transparent hover:bg-transparent btn-outline btn-wide text-4xl px-5">
              <FcGoogle /> <span className=" text-xl">Google</span>
            </button>
            <button onClick={handleGithub} className="btn hover:shadow-2xl bg-transparent hover:bg-transparent border-blue-700 hover:text-black btn-outline btn-wide text-4xl px-5">
              <FaGithub /> <span className=" text-xl">GitHub</span>
            </button>
          </div>
          <h1 className=" text-lg text-center mt-5">
            Don't have an account?{" "}
            <Link to="/register" className=" text-[#5356FF] font-semibold">
              Sign Up
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
