import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Deposit from '../Deposit/Deposit';
import './ReactTab.css'
import Withdraw from '../Withdraw/Withdraw';
import History from '../History/History';
import { useState } from 'react';

const ReactTab = () => {

    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className=''>
            <Tabs
            
              selectedIndex={activeTab}
             onSelect={tabIndex => setActiveTab(tabIndex)}>
                <TabList className={`flex justify-around w-96 p-1 mx-auto  rounded border-0 outline-0  bg-[#292927] text-white `}>
                    <Tab className=' w-2/6  py-1 rounded '><p className='text-center fw-semibold font-sans'>Deposit</p></Tab>
                    <Tab className=' w-2/6  py-1 rounded  '><p className='text-center fw-semibold font-sans'>Withdraw</p></Tab>
                    <Tab className=' w-2/6  py-1 rounded  '><p className='text-center fw-semibold font-sans'>History</p></Tab>



                </TabList>

                <TabPanel className=' lg:w-[600px] w-full  mx-auto mt-6   '>
                    <Deposit></Deposit>
                </TabPanel>
                <TabPanel className='  bg-[#5a5656]  lg:w-[600px]  mx-auto mt-6 '>
                    <Withdraw></Withdraw>
                </TabPanel>
                <TabPanel className=' bg-[#5a5656]  w-full mx-auto lg:mt-6  '>
                    <History></History>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default ReactTab;