import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {
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

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;
