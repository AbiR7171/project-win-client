import bkashLogo from './../../assets/images/Bkash.png'
import nogodLogo from './../../assets/images/Nagad-Logo.png'
import upayLogo from './../../assets/images/Upay.png'
import rocketLogo from './../../assets/images/Rocket.png'
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import useBank from '../Hooks/useBank';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Withdraw = () => { 

     const[method, setMethod]=useState()
    const [number, setNumber]=useState();
    const[bank]=useBank();

    const id= useParams();
    console.log(id, "withdraw");


    const withdrawRef = useRef()




   
    const handleBkash = ()=>{
              
        const bkashNumber = bank?.find(i => i.method === "bkash");
      //   console.log(bkashNumber.number);
        if(bkashNumber.status === "active"){ 

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
            
        const nogodNumber = bank?.find(i => i.method === "nogod");
      //   console.log(nogodNumber.number); 
      if(nogodNumber.status === "active"){ 

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
            
        const rocketNumber = bank?.find(i => i.method === "rocket");
        if(rocketNumber.status === "active"){ 

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
            
        const upayNumber = bank?.find(i => i.method === "upay");
     

        if(upayNumber?.status === "active"){ 

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


  const handleWithDraw = ()=>{
                  

             axios.post('http://localhost:5000/trx',{
                    id:id.id,
                    date:moment().format("YYYY-MM-DD hh:mm:ss"),
                    amount:withdrawRef.current.value,
                    paymentMethod:method,
                    method:"withdraw",
                    status:"pending"

             })
             .then(res =>{
                   console.log(res.data);
                   if(res.data.insertedId){
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
                        title: 'Success'
                      })
                   }
             })
  }
    
    return (
        <div className='deposit mb-20'>
            <p className="text-yellow-500 text-xl ms-3 left-border">Funds</p>
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
                    <h1 className='text-xl text-yellow-500 left-border'>Withdraw</h1>
                    <div className='flex'>
                        <p className='text-2xl text-yellow-500 p-1'>৳500- ৳25,000</p>
                        
                    </div>
                </div>
                <div className="border border-spacing-2 mt-2"></div>


                {/* deposit input tag */}


                <div>
                    <input ref={withdrawRef} type="text" className='p-2 my-3 rounded w-full bg-gray-600 outline-orange-600' name="" id="" placeholder='0.00' />
                </div>
                <div className='flex justify-between m-4 text-white'>
                   <p></p>
                    <div onClick={handleWithDraw} className='mb-5'>
                        <button className='btn px-3 py-1 text text-white bg-green-700 rounded-md'>Withdraw</button>
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