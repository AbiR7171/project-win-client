import bkashLogo from './../../assets/images/Bkash.png'
import nogodLogo from './../../assets/images/Nagad-Logo.png'
import upayLogo from './../../assets/images/Upay.png'
import rocketLogo from './../../assets/images/Rocket.png'
import { Icon } from '@iconify/react';

const Withdraw = () => {
    return (
        <div className='deposit mb-20'>
            <p className="text-yellow-500 text-xl ms-3 left-border">Funds</p>
            <div className="border border-spacing-2 mt-2"></div>

            {/* logo container  */}


            <div className='flex justify-around p-4 mt-5'>
                <div>
                    <img className=' h-10 w-10 hover:scale-125' src={bkashLogo} alt="" />
                </div>
                <div>
                    <img className=' h-10 w-10 hover:scale-125' src={nogodLogo} alt="" />
                </div>
                <div>
                    <img className=' h-10 w-10 hover:scale-125' src={rocketLogo} alt="" />
                </div>
                <div>
                    <img className=' h-10 w-10 hover:scale-125' src={upayLogo} alt="" />
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-16">
                    <h1 className='text-xl text-yellow-500 left-border'>Withdraw</h1>
                    <div className='flex'>
                        <p className='text-2xl text-yellow-500'>2000</p>
                        <Icon className='text-2xl text-yellow-500' icon="mdi:bangladeshi-taka" />
                    </div>
                </div>
                <div className="border border-spacing-2 mt-2"></div>


                {/* deposit input tag */}


                <div>
                    <input type="text" className='p-2 my-3 rounded w-full bg-gray-600 outline-orange-600' name="" id="" placeholder='0.00' />
                </div>
                <div className='flex justify-between m-4 text-white'>
                   <p></p>
                    <div className='mb-5'>
                        <button className='btn px-3 py-1 text text-white bg-green-700 rounded-md'>Payment</button>
                    </div>
                </div>
                {/* <div className="border border-spacing-4 mt-2"></div> */}


                {/* order information section  */}


                {/* Tarnjaction input  */}

            </div>

        </div>
    );
};

export default Withdraw;