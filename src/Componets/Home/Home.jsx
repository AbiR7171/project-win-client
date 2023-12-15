import './Home.css'
import logo from './../../assets/images/logo.webp'
import ReactTab from './../ReactTab/ReactTab';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Marquee from "react-fast-marquee";
import { Icon } from '@iconify/react';
import Modal from '../../modal/Modal';


const Home = () => { 

    const getId = useParams();
    console.log(getId); 
  
    const[allNotification, setAllNotification]=useState([])
    const [notification, setNotification]=useState([]);
    const [id, setId]=useState();

    console.log(id);

    useEffect(()=>{
              axios.get("https://win-bdt-server-new.vercel.app/lastNotification")
              .then(res =>{
                      console.log(res.data);
                      setAllNotification(res.data)
                     setNotification(res.data[0])
                  
                     
              })


    },[])

     

    return (
        <div class="header  lg:w-2/4  lg:mx-auto  bg-black  "> 
       <div className='flex items-center bg-black '>
       <Marquee>
       <p onClick={()=>document.getElementById('my_modal_5').showModal() & setId(notification)} className='flex  gap-1 items-center me-4'> <Icon icon="raphael:speaker" className='text-2xl' /> {notification?.message}</p>
        </Marquee>
       </div>
        <div class="flex justify-between p-2 items-center">
        <div className='w-10/12'> <a href="https://www.winbdt.com/"> <img src={logo} alt="" className="w-9/12 lg:w-2/6"/></a></div>
          <div class="bg-gray-800 rounded p-2  text-white w-44 h-16">
            <h2 class="p-">ID : <span id="user-id">{getId?.id}</span></h2>
            <h2 class="p-">MA : 200203</h2>
          </div>
        </div>
        <div class="lg:p-2 mt-4 lg:mt-0">
    
                      <ReactTab/>
    
        </div>
        <dialog id="my_modal_4" className="modal lg:hidden block">
  <div className="modal-box lg:w-8/12 w-full max-w-5xl h-full "> 
  <form className='flex justify-between text-2xl   rounded py-2 px-2 text-white   mb-6' method="dialog">
        {/* if there is a button, it will close the modal */} 
        <p className='flex items-center gap-2'> Notice board </p>
        <button className="text-white text-2xl "><Icon icon="maki:cross" /></button>
      </form>
     <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-5 '>
             <div className='lg:border-r-2 h-full '> 
     
          <ul >
             {
               allNotification?.map(n => {
                       return  <li className='hover:bg-sky-300 bg-opacity-50 mb-2 hover:text-white lg:text-[18px] text-[16px] font-serif ' onClick={()=>document.getElementById('my_modal_5').showModal() & setId(n)}>
                        <div className='flex items-center  px-2' > <p>{n?.title}</p>  <p className='ml-auto'>{n?.date}</p></div> 
                        <hr  />
                        </li>
               })
             }
          </ul>





             </div> 
             
           

             <div className='hidden sm:block'>
             <h3 className="font-bold text-lg">{id?.title}</h3> 
    <hr /> 

     <p className='mt-2'>{id?.date}, {id?.time}</p>
    <p className="py-4 text-center">{id?.message}</p>
    <div className="modal-action">
   
    </div>
             </div>
     </div>
  </div>
</dialog>


<dialog id="my_modal_5" className="modal ">
  <div className="modal-box lg:w-8/12 w-full max-w-5xl h-full ">
     <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-5 '>

     <div className='lg:border-r-2 h-full hidden sm:block'> 
     
     <ul >
        {
          allNotification?.map(n => {
                  return  <li className='hover:bg-sky-300 bg-opacity-50 hover:text-white lg:text-[18px] text-[16px] font-serif ' onClick={()=>document.getElementById('my_modal_5').showModal() & setId(n)}>
                   <div className='flex items-center  px-2' > <p>{n?.title}</p>  <p className='ml-auto'>{n?.date}</p></div> 
                   <hr className='mt-2'  />
                   </li>
          })
        }
     </ul>





        </div> 
        
          
             <div className=''>
             <h3 className="font-bold text-lg">{id?.title}</h3> 
    <hr /> 

     <p className='mt-2'>{id?.date}, {id?.time}</p>
    <p className="py-4 text-center">{id?.message}</p>
    <div className="modal-action flex justify-center">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button  onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn">Close</button>
      </form>
    </div>
             </div>
     </div>
  </div>
</dialog>
        
    </div>

    );
};

export default Home;