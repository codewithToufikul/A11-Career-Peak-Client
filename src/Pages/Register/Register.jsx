import { FaGithub, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
  const {creatUser, updateUser, googleLogin, gitHubLogin} = useContext(AuthContext)
  const [passError, setPassError] = useState('')
  const location = useLocation();
  const navigete = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    if(password < 6){
      setPassError('please provide more then 6 character password');
      return;
  }
    if(!/[A-Z]/.test(password)){
      setPassError('please must contain at least one uppercase letter')
      return;
    }
    if(!/[a-z]/.test(password)){
      setPassError('please must contain at least one lowercase letter')
      return;
    }
    creatUser(email, password)
    .then((result)=>{
      console.log(result);
      toast.success('Successfully Register!')
      navigete(location?.state ? location.state : '/')
      updateUser(name, photo)
      .then(() => {
      }).catch((error) => {
        toast.error(error.message)
        console.log(error);
      });
    })
    .catch(error=>{
      toast.error(error.message)
      console.error(error);
    })
  };
  const handleGoogle = () =>{
    googleLogin()
    .then(result=>{
      toast.success('successfully Register!')
      navigete(location?.state ? location.state : '/')
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
      navigete(location?.state ? location.state : '/')
      console.log(result);
    }).catch((error) => {
      toast.error(error.message)
      console.log(error);
    });
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero-content max-w-full  pt-16 p-5 mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/4RQtvq7/Friendly-Ones-Friendly-Blobs.png)'}}>
        <div className="relative card max-w-3xl p-6 md:p-12 w-full bg-blue-50">
          <div className=" absolute top-[-50px] rounded-full border-[10px] border-white p-3 md:p-5 left-[38%] md:left-[42%] bg-[#378CE7]">
            <p className=" text-white text-5xl">
              <FaRegUser />
            </p>
          </div>
          <h1 id="myDIV" className=" mt-4 text-4xl text-center font-semibold">
            Create Account
          </h1>
          <form onSubmit={handleRegister} className="card-body p-0 py-3">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input text-lg input-bordered rounded-full py-7 "
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="input mt-3 text-lg input-bordered rounded-full py-7 "
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
            {
                  passError ? <span className=" text-[13px] text-red-500">{passError}</span> : ''
            }
            <div className="relative form-control">
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered rounded-full py-7 mt-3 text-lg"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  text-lg text-white bg-[#67C6E3] rounded-full ">
                Register
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
            Already have an account?
            <Link to="/login" className=" text-[#5356FF] font-semibold">
              Sign In
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
