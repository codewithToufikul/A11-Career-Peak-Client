import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { Link } from 'react-router-dom';

const JobCategory = ({jobs}) => {
    const remoteJobs = jobs.filter(job => job.jobCategory == "Remote");
    const onSiteJobs = jobs.filter(job => job.jobCategory == "On Site");
    const partTimeJobs = jobs.filter(job => job.jobCategory == "Part Time");
    const hybridJobs = jobs.filter(job => job.jobCategory == "Hybrid");
    const allJobs = jobs.slice(0, 9);
    console.log(allJobs);
    return (
        <div className=' '>
            <div className=' flex flex-col items-center mb-16'>
                <h1 className=' text-6xl font-semibold'>Browse Our Jobs</h1>
                <p className=' text-xl mt-3 '>Explore our available job opportunities below:</p>
            </div>
            <Tabs>
                <TabList className="flex justify-center">
                    <Tab className="cursor-pointer py-4 px-8 bg-blue-100 border rounded-l-2xl border-r-blue-500 text-xl font-semibold">All Jobs</Tab>
                    <Tab className="cursor-pointer py-4 px-8 bg-blue-100 border  border-r-blue-500  text-xl font-semibold">On-Site</Tab>
                    <Tab className="cursor-pointer py-4 px-8 bg-blue-100 border  border-r-blue-500 text-xl font-semibold">Remote</Tab>
                    <Tab className="cursor-pointer py-4 px-8 bg-blue-100 border  border-r-blue-500 text-xl font-semibold">Part Time</Tab>
                    <Tab className="cursor-pointer py-4 px-8 bg-blue-100 border rounded-r-2xl text-xl font-semibold">Hybrid</Tab>
                </TabList>

                <div className=' p-5 m-3 rounded-xl'>
                <TabPanel>
                    <div className=' grid grid-cols-3 gap-5'>
                        {
                            allJobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                    <div className=' flex justify-center mt-7'>
                    <Link to="alljobs" className=' btn btn-outline text-lg text-blue-300 '>View All Jobs</Link>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=' grid grid-cols-3 gap-3'>
                        {
                            onSiteJobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=' grid grid-cols-3 gap-3'>
                        {
                            remoteJobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=' grid grid-cols-3 gap-3'>
                        {
                            partTimeJobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className=' grid grid-cols-3 gap-3'>
                        {
                            hybridJobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default JobCategory;
