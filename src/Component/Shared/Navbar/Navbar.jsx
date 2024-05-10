import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)
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
        to="/allspot"
      >
        {" "}
        All Jobs
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
        to="/addspot"
      >
       Applied Jobs
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? " text-lg font-bold text-[#378CE7]"
            : isPending
            ? "pending"
            : " text-lg mr-2 hover:underline font-semibold"
        }
        to="/mylist"
      >
        Add A Job
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? " text-lg font-bold text-[#378CE7]"
            : isPending
            ? "pending"
            : "text-lg mr-2 hover:underline  font-semibold"
        }
        to="/mylist"
      >
       My Jobs
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive
            ? " text-lg font-bold text-[#378CE7]"
            : isPending
            ? "pending"
            : " text-lg mr-2 hover:underline  font-semibold"
        }
        to="/mylist"
      >
       Blogs
      </NavLink>
    </li>
  </>
    return (
        <div className={`navbar sticky top-0 z-50 lg:px-56 bg-blue-50   mx-auto ${scrolling? 'shadow-lg' : ''}`}>
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
    <img className=" w-14 md:w-[100px]" src="https://i.ibb.co/m94z6Mk/great-custom-joblisting-job-search-logo-design-vector-illustrations-2-BG2-ETY-removebg-preview.png" alt="" />
    <h3 className="md:text-3xl text-xl font-semibold">Career<span className=" text-[#378CE7]">Peak</span></h3>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal mx-10">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end lg:w-fit">
    <Link to="/login" className="btn md:text-lg text-white  rounded-xs bg-[#67C6E3]">Login</Link>
  </div>
</div>
    );
};

export default Navbar;