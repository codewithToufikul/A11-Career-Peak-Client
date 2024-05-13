import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const {users, logOutUser} = useContext(AuthContext);
  const [scrolling, setScrolling] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setScrolling(true)
      }
      else{
        setScrolling(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

    const navLink = 
    <>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? " text-lg font-bold text-[#378CE7]"
            : isPending
            ? "pending"
            : "text-lg mr-2 hover:underline font-semibold "
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? " text-lg font-bold text-[#378CE7]"
            : isPending
            ? "pending"
            : "text-lg mr-2 hover:underline font-semibold"
        }
        to="/alljobs"
      >
        {" "}
        All Jobs
      </NavLink>
    </li>
   {
     users ? <li>
     <NavLink
       className={({ isActive, isPending }) =>
         isActive
           ? " text-lg font-bold text-[#378CE7]"
           : isPending
           ? "pending"
           : "text-lg mr-2 hover:underline font-semibold"
       }
       to="/appliedjobs"
     >
      Applied Jobs
     </NavLink>
   </li> : ''
   }
   {
     users ? <li>
     <NavLink
       className={({ isActive, isPending }) =>
         isActive
           ? " text-lg font-bold text-[#378CE7]"
           : isPending
           ? "pending"
           : "text-lg mr-2 hover:underline font-semibold"
       }
       to="/addjob"
     >
      Add A Job
     </NavLink>
   </li> : ''
   }
   {
     users ? <li>
     <NavLink
       className={({ isActive, isPending }) =>
         isActive
           ? " text-lg font-bold text-[#378CE7]"
           : isPending
           ? "pending"
           : "text-lg mr-2 hover:underline font-semibold"
       }
       to="/myjobs"
     >
      My Jobs
     </NavLink>
   </li> : ''
   }
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? " text-lg font-bold text-[#378CE7]"
            : isPending
            ? "pending"
            : " text-lg mr-2 hover:underline  font-semibold"
        }
        to="/myjobs"
      >
       Blogs
      </NavLink>
    </li>
  </>
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("User Successfully LogOut");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
    return (
        <div className={`navbar flex justify-between sticky top-0 z-50 lg:px-56 bg-blue-50   mx-auto ${scrolling? 'shadow-lg' : ''}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
        
      </ul>
      
    </div>
    <div className=" flex items-center">
    <img className=" w-12 md:w-[100px]" src="https://i.ibb.co/m94z6Mk/great-custom-joblisting-job-search-logo-design-vector-illustrations-2-BG2-ETY-removebg-preview.png" alt="" />
    <h3 className="md:text-3xl text-xl font-semibold">Career<span className=" text-[#378CE7]">Peak</span></h3>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal mx-10">
      {navLink}
      <li><button
            className={`     rounded-full `}
            onClick={handleTheme}
          >
            {theme == "light" ? (
              <div className=" w-8">
                <img
                className=""
                src="https://i.ibb.co/Zd6kxCc/pngtree-dark-mode-icon-light-png-clipart-png-image-3811921-removebg-preview.png"
              />
              </div>
            ) : (
              <p className="  hover:bg-slate-500 rounded-full text-2xl md:text-4xl">
                <MdOutlineDarkMode />
              </p>
            )}
          </button></li>
    </ul>
  </div>
  <div className="navbar-end  lg:w-fit">
  {users ? (
          <div className=" md:pr-5 dropdown z-40 dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className=" md:w-[60px] w-12 md:h-[60px] h-12 border-2 md:border-4 md:p-1 rounded-full  border-[#67C6E3] m-1"
            >
              <img
                className="w-full rounded-full h-full"
                src={users.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content  top-14 right-0 md:top-12 md:right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-xl font-semibold text-blue-400">
                  {users.displayName}
                </a>
              </li>
              <li onClick={handleLogOut}>
                <a className=" text-lg font-semibold text-red-500">
                  LogOut <IoIosLogOut />
                </a>{" "}
              </li>
            </ul>
          </div>
        ) : ''}
    <Link to="/login" className="btn md:px-8 md:text-xl text-white  rounded-xs bg-[#67C6E3]">Login</Link>
  </div>
</div>
    );
};

export default Navbar;