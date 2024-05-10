import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const FindJob = () => {
    return (
        <div className=" grid grid-cols-2">
            <div className=" w-[600px] bg-no-repeat  bg-contain" style={{backgroundImage: 'url(https://i.ibb.co/8jN7G1k/img-bg-pattern.png)'}}>
                <img src="https://i.ibb.co/txbD6S1/shape-image.png" className="" alt="" />
            </div>
            <div className=" max-w-[720px]">
                <h1 className=" leading-[70px] text-6xl font-bold">Find the job that suits you the most</h1>
                <p className=" text-lg mt-7 ">Discover your ideal job with ease. Our platform provides a streamlined search experience, connecting you with opportunities tailored to your skills and interests.</p>
                <div className=" flex-col flex gap-12 mt-8">
                    <div className=" flex items-center gap-3">
                        <p className=" border-2 border-blue-500  text-4xl text-blue-500 bg-blue-100 p-4 rounded-full"><HiOutlineMagnifyingGlass /></p>
                        <div>
                        <p className=" text-3xl font-semibold">Find a perfect</p>
                        <p className=" mt-2 text-lg"> 100+ job in this website !</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3">
                        <p className=" border-2 border-blue-500  text-4xl text-blue-500 bg-blue-100 p-4 rounded-full"><RiPagesLine /></p>
                        <div>
                        <p className=" text-3xl font-semibold">Apply on your job</p>
                        <p className=" mt-2 text-lg">Make sure submit your resume</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3">
                        <p className=" border-2 border-blue-500  text-4xl text-blue-500 bg-blue-100 p-4 rounded-full"><MdOutlineNotificationsActive /></p>
                        <div>
                        <p className=" text-3xl font-semibold">Get Notified</p>
                        <p className=" mt-2 text-lg">Believe you can and you're halfway there.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJob;