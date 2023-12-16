import bkashLogo from './../../assets/images/Bkash.png';
import nogodLogo from './../../assets/images/Nagad-Logo.png';
import upayLogo from './../../assets/images/Upay.png';
import rocketLogo from './../../assets/images/Rocket.png';
import { Icon } from '@iconify/react';
import './Deposit.css';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useBank from '../Hooks/useBank';
import CopyToClipboard from 'react-copy-to-clipboard';

import useUsers from '../Hooks/useUsers';



const Deposit = () => { 


   
    const [number, setNumber]=useState();
    const [deposit,setDeposit]=useState();
    const [selected,setSelected]=useState();
    const [trx,setTrx]=useState();
    const[method, setMethod]=useState()
    const[show, setShow]=useState(true)
    const[bank]=useBank();
    const[copied, setCopied]=useState(false)

    console.log(bank);
    const [users]=useUsers();

    console.log(users, "user");
  
  
    const getId = useParams();
    console.log(getId, "deposite");


    const handleCopy =()=>{
         setCopied(true);
         if(copied){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'copied'
              })
         }
    }

    
   
    


    const depositRef=useRef();
    const trxRef=useRef();


      const bkashNumber = bank?.find(i => i.method === "bkash");
      const nogodNumber = bank?.find(i => i.method === "nogod");
      const rocketNumber = bank?.find(i => i.method === "rocket");
      const upayNumber = bank?.find(i => i.method === "upay");
       

 
  


    const handleBkash = ()=>{
              
        
        //   console.log(bkashNumber.number);
          if(bkashNumber.status === "active"){ 
             setSelected("bkash")
            setMethod('bkash')
            setNumber(bkashNumber?.number)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'clicked'
              })
          }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'This payment method Not active'
              })
          }
           
    }
    const handleNogod = ()=>{
              
         
        //   console.log(nogodNumber.number); 
        if(nogodNumber.status === "active"){ 
          setSelected("nogod")
            setMethod("nogod")
            setNumber(nogodNumber?.number)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'clicked'
              })
          }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'This payment method Not active'
              })
          }
         
    }
    const handleRocket = ()=>{
              
        
          if(rocketNumber.status === "active"){ 
            setSelected("rocket")
             setMethod('rocket')
            setNumber(rocketNumber?.number)

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'clicked'
              })
          }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'This payment method Not active'
              })
          }
        
    }

    const handleUpay = ()=>{
              
          

          if(upayNumber?.status === "active"){ 
            setSelected("upay")
            setMethod('upay')
            setNumber(upayNumber?.number)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'clicked'
              })
          }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'This payment method Not active'
              })
          }
        
    }

    const handleDepositRef=()=>{
        const depositData=depositRef.current.value;
        setDeposit(depositData);
        setShow(false)
        
    }
    const handleTrxAndDepositData=()=>{
        const trxData=trxRef.current.value;
        console.log(trxData);
        setTrx(trxData);
        axios.post('https://win-bdt-server-new.vercel.app/trx',{
            amount:deposit,trx:trxData,date:moment().format('YYYY-MM-DD hh:mm:ss'),
            id:getId?.id,paymentMethod:method,status:"pending",method:"deposit", number:users?.number

        })
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){ 

                axios.post("https://win-bdt-server-new.vercel.app/trxNotification", {
                    trxInsertId: res.data.insertedId
                })
                .then(res => {
                         console.log(res.data);
                })

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'successfully'
                  })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! please try again',
                    
                  })
            }
        })
        
    }
    // useEffect(()=>{
       
    // },[])

  


    return (

        <div className='deposit mb-20 lg:p-2 '>
       <div className='bg-[#5a5656] p-2 '>

     
          <h3 className="text-yellow-600 mt-4">Funds</h3>
     
            
        <hr />

            {/* logo container  */}


            <div className='flex justify-around p-4 mt-5'>
                <div className={` p-2 rounded-md  ${selected === "bkash" ? "bg-[#047857]" : "bg-[#ffffffd8]"} ${bkashNumber?.status === "deactivate" && "hidden"}  `} onClick={handleBkash}>
                    <img  className={` h-10 w-10 hover:scale-125 ${bkashNumber?.status === "deactivate" && "hidden"}`}  src={bkashLogo} alt="" />
                </div>
                <div className={` p-2 rounded-md  ${selected === "nogod" ? "bg-[#047857]" : "bg-[#ffffffd8]"} ${nogodNumber?.status === "deactivate" && "hidden"}  `}  onClick={handleNogod}>
                    <img className={` h-10 w-10 hover:scale-125 ${nogodNumber?.status === "deactivate" && "hidden"} `} src={nogodLogo} alt="" />
                </div>
                <div className={` p-2 rounded-md  ${selected === "rocket" ? "bg-[#047857]" : "bg-[#ffffffd8]"}  ${rocketNumber?.status === "deactivate" && "hidden"} `}  onClick={handleRocket}>
                    <img className={` h-10 w-10 hover:scale-125 ${rocketNumber?.status === "deactivate" && "hidden"} `} src={rocketLogo} alt="" />
                </div>
                <div className={` p-2 rounded-md  ${selected === "upay" ? "bg-[#047857]" : "bg-[#ffffffd8]"}  ${upayNumber?.status === "deactivate" && "hidden"} `} onClick={handleUpay}>
                    <img className={` h-10 w-10 hover:scale-125 ${upayNumber?.status === "deactivate" && "hidden"} `} src={upayLogo} alt="" />
                </div>
            </div>
            <div>


                <div className="flex justify-between items-center mt-8 ">


                <h3 className="text-yellow-600   ">Deposit</h3>
              
            

          
        
                
                    <div className='flex '>
                        <p className=' text-[#bdb8b8] text-[10px]'> <span className='text-[12px]'>৳</span> 200 - <span className='text-[12px]'>৳</span> 25000</p>
                       
                    </div>
                </div>

                <hr /> 
                {/* <div className="border border-spacing-2 mt-2"></div> */}


                {/* deposit input tag */}


                <div className=' flex py-4'>
                <input ref={depositRef} type="text" className="w-full   text-gray-400 inputs " 
                 placeholder="0.00 ৳" 
                 oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 5)"/>
                  
                </div>
                <div className='flex justify-between items-center  '>
                    <div className='text-[#bdb8b8]  mt-2  text-[10px]'>
                        <p>১০০০ টাকা এর বেশি ডিপোজিট করলে ৫০ টাকা বোনাস পাবেন ।</p>
                        <p>টাকা সেন্ট মানি করুন কোন প্রকার খরচ নেই ।</p>
                    </div>
                    <div className={`${!show && "hidden"}`}>
                        <button onClick={handleDepositRef} className=' px-3 py-1 text text-white rounded bg-[#047857] '>Payment</button>
                    </div>
                </div>
       </div>
             
    
       {/* <div className='divider bg-gray-900' /> */}

                {/* order information section  */}
          <div className={`${show && "hidden"} `}>

          <div>      
          <h3 className="text-yellow-600 p-2 mt-2 mb-4 ">Order Information</h3>
          

        <hr />
          
                    {/* <div className="border border-spacing-2 mt-2"></div> */}
                </div>
                <div className='flex gap-3 py-4'>
                    <div className=''>
                        <img className='w-16 h-16' src={selected === "bkash" && bkashLogo ||
                       selected === "nogod"  && nogodLogo ||
                       selected === "rocket" && rocketLogo ||
                       selected === "upay" && upayLogo} alt="" />
                    </div>
                    <div className=' text-white  '>
                        <div className='flex  gap-2 '>
                            <p className='text-xl'>{number}</p>
                           <CopyToClipboard text={number}>
                             <Icon onClick={handleCopy} className=' text-green-600' icon="akar-icons:copy" />
                           </CopyToClipboard>
                        </div>
                        <div className='flex gap-2'>
                        <p className='text-xl'>{deposit}</p>
                           <CopyToClipboard text={deposit}>
                           <Icon onClick={handleCopy} className='text-green-600' icon="akar-icons:copy" />
                           </CopyToClipboard>
                          
                        </div>


                    </div>
                </div>
                {/* Tarnxaction input  */}
                <div className=''>
                    <input ref={trxRef} type="text"  placeholder='Trx :' className='trx inputs ' />
                </div>
                {/* <div className="border border-spacing-5 mt-2"></div> */}

             
        
            </div>

           
              <div className={`${show && "hidden"}`}>
              <button  onClick={handleTrxAndDepositData} className='flex justify-center px-3 py-2 my-3 text-white  rounded w-full border-0 bg-[#047857]  fw-bold'>Submitted</button>
              </div>
            
           
          </div>
        </div>



    );
};

export default Deposit;