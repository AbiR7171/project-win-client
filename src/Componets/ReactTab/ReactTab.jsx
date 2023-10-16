import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Deposit from '../Deposit/Deposit';
import './ReactTab.css'
import Withdraw from '../Withdraw/Withdraw';
import History from '../History/History';

const ReactTab = () => {
    return (
        <div>
            <Tabs>
                <TabList className='bg-gray-700 md:flex justify-around border-0 outline-none mt-1 mb-5 md:w-5/6 mx-auto text-md'>
                    <Tab className='p-2 w-1/3 '><p className='text-center fw-semibold font-sans'>Deposit</p></Tab>
                    <Tab className='p-2 w-1/3 '><p className='text-center fw-semibold font-sans'>Withdraw</p></Tab>
                    <Tab className='p-2 w-1/3 '><p className='text-center fw-semibold font-sans'>History</p></Tab>



                </TabList>

                <TabPanel className='bg-slate-800 w-[720px] mx-auto mt-5'>
                    <Deposit></Deposit>
                </TabPanel>
                <TabPanel className=' bg-slate-800 w-[720px] mx-auto'>
                    <Withdraw></Withdraw>
                </TabPanel>
                <TabPanel className='bg-slate-800 w-[720px] mx-auto'>
                    <History></History>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default ReactTab;