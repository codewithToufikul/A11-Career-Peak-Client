import bannerBg from "../../assets/bg-banner.svg";
import './style.css'

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="bg-cover lg:py-10 dark:text-gray-800"
    >
      <div className="container flex  flex-col justify-between py-6 lg:px-16 lf:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
            <p className=" text-4xl mb-3 font-bold text-blue-500 font-model">Find Talent</p>
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold sm:text-6xl">
            The Easiest Way to  Get Your New Job
          </h1>
          <p className="mt-6 mb-8 md:text-lg">
          At CareerPeak, we're not just about pushing boundaries we're about redefining them. Our commitment to innovation drives everything we do.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-400 dark:text-gray-50"
            >
              Find Job
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Add a Job
            </a>
          </div>
        </div>
        <div className=" ">
          <img
            src="https://i.ibb.co/0n77PXh/1693971265825.png"
            alt=""
            className=" z-0 object-contain slow-animation "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
