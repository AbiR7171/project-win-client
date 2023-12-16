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
import useUsers from '../Hooks/useUsers';

const Withdraw = () => { 

     const[method, setMethod]=useState()
    const [number, setNumber]=useState();
    const [selected, setSelected]=useState()
    const[bank]=useBank();

    const id= useParams();
    console.log(id, "withdraw");


    const [users]=useUsers();

    console.log(users);


    const withdrawRef = useRef();

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


  const handleWithDraw = ()=>{
                  

             axios.post('https://win-bdt-server-new.vercel.app/trx',{
                    id:id.id,
                    date:moment().format("YYYY-MM-DD hh:mm:ss"),
                    amount:withdrawRef.current.value,
                    paymentMethod:method,
                    method:"withdraw",
                    status:"pending",
                    number: users?.number

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
      <div className='deposit mb-20 p-2 '>
      <div className='bg-[#5a5656]'>

    
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


               <h3 className="text-yellow-600   ">Withdraw</h3>
             
           

         
       
               
                   <div className='flex '>
                       <p className=' text-[#bdb8b8] text-[10px]'> <span className='text-[12px]'>৳</span> 500 - <span className='text-[12px]'>৳</span> 25000</p>
                      
                   </div>
               </div>

               <hr /> 
               {/* <div className="border border-spacing-2 mt-2"></div> */}


               {/* deposit input tag */}


               <div className=' flex py-4'>
               <input ref={withdrawRef} type="text" className="w-full pr-6  text-gray-400 inputs" 
                placeholder="0.00৳" 
                oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 5)"/>
                 
               </div>
               <div className='flex justify-between items-center  '>
                   <div>

                   </div>
                   <div className={`${selected && 'flex justify-between w-full'}`}> 
                     {
                        selected &&  <p className='text-yellow-600  text-[18px] flex  items-center gap-2 font-semibold space  px-2   py-2 rounded-md '>
          <Icon icon="solar:hand-money-linear" />   {users?.number}</p>
                     }
                       <button onClick={handleWithDraw} className=' px-3 py-1 text text-white rounded bg-[#047857] '>Withdraw</button>
                   </div>
               </div>
      </div>
            
   
      {/* <div className='divider bg-gray-900' /> */}

               {/* order information section  */}
       

          
          
         </div>
       </div>
    );
};

export default Withdraw;