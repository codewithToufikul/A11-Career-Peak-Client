import bannerBg from '../../assets/bg-banner.svg'

const Banner = () => {
    return (
        <section  style={{backgroundImage: `url(${bannerBg})`}} className= "bg-cover py-16 dark:text-gray-800">
	<div className="container flex flex-col justify-between px-16 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="dark:text-violet-600">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
			</div>
		</div>
		<div className=" ">
			<img src="https://i.ibb.co/0n77PXh/1693971265825.png" alt="" className="object-contain  " />
		</div>
	</div>
</section>
    );
};

export default Banner;