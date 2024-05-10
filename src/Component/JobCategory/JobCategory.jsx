import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const JobCategory = () => {
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab ><p className=' text-xl font-semibold'>All Jobs</p></Tab>
      <Tab><p className=' text-xl font-semibold'>On Site</p></Tab>
      <Tab><p className=' text-xl font-semibold'>Remote Job</p></Tab>
      <Tab><p className=' text-xl font-semibold'>Part Time</p></Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default JobCategory;