import { CiMail } from "react-icons/ci";
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className=" bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/QN41WCc/v915-wit-011-l.jpg)'}}>
  <div className="max-w-[1480px] mx-auto px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-teal-600 sm:justify-start">
        <div className=" flex items-center">
    <img className=" w-[100px]" src="https://i.ibb.co/m94z6Mk/great-custom-joblisting-job-search-logo-design-vector-illustrations-2-BG2-ETY-removebg-preview.png" alt="" />
    <h3 className="text-3xl font-semibold">Career<span className=" text-[#378CE7]">Peak</span></h3>
    </div>
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed  sm:max-w-xs sm:text-left">
        Our mission is to empower job seekers and employers alike by providing a seamless platform for meaningful connections.
        </p>
        <div className=" justify-center md:justify-start  flex flex-row  gap-4 mt-3">
            <a className=" text-3xl text-blue-400"><FaFacebook /></a>
            <a className=" text-3xl text-red-400"><FaInstagramSquare /></a>
            <a className=" text-3xl text-blue-300"><FaTwitter /></a>
            <a className=" text-3xl"><FaGithub /></a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-xl font-medium text-gray-900">About Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="hover:underline text-base font-medium " href="#">
                Company History
              </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#">
                Meet the Team
              </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#">
                Employee Handbook
              </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#"> Careers </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-xl font-medium text-gray-900">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="hover:underline text-base font-medium" href="#">
                Web Development
              </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#"> Web Design </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#"> Marketing </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#"> Google Ads </a>
            </li>
          </ul>
        </div>

        <div className="text-center  sm:text-left">
          <p className="text-xl font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="hover:underline text-base font-medium" href="#"> FAQs </a>
            </li>

            <li>
              <a className="hover:underline text-base font-medium" href="#"> Support </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-xl font-medium text-gray-900">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <p className=" text-lg font-bold"><CiMail /></p>

                <span className="flex-1 text-lg text-gray-700">john@doe.com</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >

                <p className=" text-lg"><FiPhoneCall /></p>
                <span className="flex-1 text-gray-700 text-lg">0123456789</span>
              </a>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
                <p className=" text-xl"><IoLocationOutline /></p>
              <address className="-mt-0.5 text-lg flex-1 not-italic text-gray-700">
                213 Lane, London, United Kingdom
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Terms & Conditions
          </a>

          <span>middot</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Privacy Policy
          </a>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 CareerPeak</p>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;