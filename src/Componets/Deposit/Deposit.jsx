import bkashLogo from './../../assets/images/Bkash.png';
import nogodLogo from './../../assets/images/Nagad-Logo.png';
import upayLogo from './../../assets/images/Upay.png';
import rocketLogo from './../../assets/images/Rocket.png';
import { Icon } from '@iconify/react';
import './Deposit.css';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import moment from 'moment/moment';
import { NumberContext } from '../../Login/Login';

const Deposit = () => { 


    const [bank, setBank]=useState([]);
    const [number, setNumber]=useState();
    const [deposit,setDeposit]=useState(0);
    const [trx,setTrx]=useState('');
    const moNumber = useContext(NumberContext);

    console.log(moNumber);

    


    const depositRef=useRef();
    const trxRef=useRef();

 
    useEffect(()=>{

        axios.get('http://localhost:5000/bank')
        .then(res => {
          console.log(res.data); 
          setBank(res.data)
          
        }) 
    },[])


    const handleBkash = ()=>{
              
          const bkashNumber = bank?.find(i => i.method === "bkash");
        //   console.log(bkashNumber.number);
          setNumber(bkashNumber.number)
    }
    const handleNogod = ()=>{
              
          const nogodNumber = bank?.find(i => i.method === "nogod");
        //   console.log(nogodNumber.number);
          setNumber(nogodNumber.number)
    }
    const handleRocket = ()=>{
              
          const rocketNumber = bank?.find(i => i.method === "rocket");
         
          setNumber(rocketNumber.number)
    }
    const handleUpay = ()=>{
              
          const upayNumber = bank?.find(i => i.method === "upay");
         
          setNumber(upayNumber.number)
    }

    const handleDepositRef=()=>{
        const depositData=depositRef.current.value;
        setDeposit(depositData);
        
    }
    const handleTrxAndDepositData=()=>{
        const trxData=depositRef.current.value;
        setTrx(trxData);
        axios.post('http://localhost:5000/trx',{
            deposit,trx,date:moment().format('YYYY-MM-DD hh:mm:ss')
        })
        .then(res=>{
            console.log(res.data);
        })
        
    }
    // useEffect(()=>{
       
    // },[])


    return (

        <div className='deposit mb-20'>
            <p className="text-yellow-500 text-xl left-border">Funds</p>
            <div className="border border-spacing-2 mt-2"></div>

            {/* logo container  */}


            <div className='flex justify-around p-4 mt-5'>
                <div onClick={handleBkash}>
                    <img  className=' h-10 w-10 hover:scale-125' src={bkashLogo} alt="" />
                </div>
                <div onClick={handleNogod}>
                    <img className=' h-10 w-10 hover:scale-125' src={nogodLogo} alt="" />
                </div>
                <div onClick={handleRocket}>
                    <img className=' h-10 w-10 hover:scale-125' src={rocketLogo} alt="" />
                </div>
                <div onClick={handleUpay}>
                    <img className=' h-10 w-10 hover:scale-125' src={upayLogo} alt="" />
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-16">
                    <h1 className='text-xl text-yellow-500 left-border'>Deposit</h1>
                    <div className='flex'>
                        <p className='text-2xl text-yellow-500'>2000</p>
                        <Icon className='text-2xl text-yellow-500' icon="mdi:bangladeshi-taka" />
                    </div>
                </div>
                <div className="border border-spacing-2 mt-2"></div>


                {/* deposit input tag */}


                <div>
                    <input ref={depositRef} type="number" className='p-2 my-3 rounded w-full bg-gray-600 outline-orange-600' name="" id="" placeholder='0.00' />
                </div>
                <div className='flex justify-between m-4 text-white'>
                    <div>
                        <p>১০০০ টাকা এর বেশি ডিপোজিট করলে ৫০ টাকা বোনাস পাবেন ।</p>
                        <p>টাকা সেন্ট মানি করুন কোন প্রকার খরচ নেই ।</p>
                    </div>
                    <div>
                        <button onClick={handleDepositRef} className='btn px-3 py-1 text text-white bg-green-700 rounded'>Payment</button>
                    </div>
                </div>
                {/* <div className="border border-spacing-4 mt-2"></div> */}


                {/* order information section  */}
                <div>
                    <p className="text-yellow-500 text-xl ms-3 left-border">Order Information</p>
                    <div className="border border-spacing-2 mt-2"></div>
                </div>
                <div className='flex gap-3'>
                    <div className='m-3'>
                        <img className='w-12 h-12' src={nogodLogo} alt="" />
                    </div>
                    <div className='mt-3 text-white'>
                        <div className='flex gap-2'>
                            <p className='text-xl'>{number}</p>
                            <Icon className='text-2xl' icon="akar-icons:copy" />
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-xl'>{deposit}</p>
                            <Icon className='text-2xl' icon="akar-icons:copy" />
                        </div>


                    </div>
                </div>
                {/* Tarnxaction input  */}
                <div>
                    <input ref={trxRef} type="text" className='p-2 my-3 rounded w-full bg-gray-600 outline-orange-600' name="" id="" placeholder='Trx :' />
                </div>
            </div>
            <div className="border border-spacing-5 mt-2"></div>
            <div className='py-6'>
                <button onClick={handleTrxAndDepositData} className='flex justify-center px-3 py-2 my-3 text-white bg-green-700 rounded w-full fw-bold'>Submitted</button>
            </div>
        </div>



    );
};

export default Deposit;