const NewaLatter = () => {
    return (
        <div className=" space-y-5 md:space-y-10 py-20 bg-cover bg-no-repeat rounded-3xl md:mb-0 mb-5 md:rounded-t-3xl max-w-[1480px] mx-auto" style={ {backgroundImage: 'url(https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/h6-footer.jpg)'}}>
          <div className=" md:space-y-2">
          <h1 className="text-2xl md:text-4xl text-center text-white">Subscribe Our Newsletter!</h1>
            <p className=" text-xs md:text-sm text-white  text-center">Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
          </div>
            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between w-full  md:w-[400px] mx-auto">
					<input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Your Email" />
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Subscribe</button>
					</div>
				</div>
        </div>
    );
};

export default NewaLatter;