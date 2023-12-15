import { useEffect, useRef, useState } from "react";
import useHistory from "../Hooks/useHistory";
import Pagination from "../Hooks/Pagination";
import { useParams } from "react-router-dom";
import axios from "axios";


const History = () => { 

    const [myHistory]=useHistory();
    // console.log(myHistory.length);

    const id=useParams();


    const [userHistory, setUserHistory]=useState([]);


    useEffect(()=>{
              axios.get(`https://win-bdt-server-new.vercel.app/myHistory?id=${id.id}`)
              .then(res =>{
                            console.log(res.data);
                            setUserHistory(res.data)
              })
    },[])


    const  dateRef = useRef();

    const handleFIndRef = () =>{ 


        axios.get(`https://win-bdt-server-new.vercel.app/searchHistoryByDate?date=${dateRef?.current?.value}&id=${id.id}`)
        .then(res =>{
                    console.log(res.data);
                    setUserHistory(res.data)
        })

        console.log(dateRef.current.value);
    }

  

    const [seeMore, setSeeMore]=useState(false);
     const [currentPage, setCurrentPage]=useState(1);
     const [postsPerPage, setPostPerPage]=useState(10);


     const lastPostIndex = currentPage * postsPerPage;
     const firstPostIndex = lastPostIndex - postsPerPage;
     const currentPost =  myHistory?.slice(firstPostIndex, lastPostIndex);


    return (
        <div className="bg-[#5a5656]"> 
             
            <div className="overflow-x-auto">
            <section id="historyTab" className="py-3" >
    <div className="container Tab-Contain lg:px-4 mx-auto md:px-4 lg:w-full lg:mx-auto ">
      <table className="table-auto w-full">
          <thead className="border-b-2 border-t-2 border-t-gray-400 border-b-gray-400 ">
            
              <tr className="pt-4 border-b-2 border-gray-400">
                  <th className=" px-2  text-white border-r-2 border-gray-400 w-1/6">Type</th>
                 
                  <th className=" px-2  text-white border-r-2 border-gray-400 ">Amount</th>
                  <th className={` px-2  text-white border-r-2 border-gray-400 `}>Status</th>
                  <th className=" px-2  text-white ">Txn Date</th> 
              </tr>

        
        
          </thead>
  
          
          <tbody >
         {
            userHistory.slice(0, 15)?.map(data =>
                 
                 <tr key={data._id} class="border-b border-dashed  border-gray-500 text-black">
                 <td className="px-2 py-2 text-center">{data?.paymentMethod}</td>
              
                 <td className={`px-2 py-2 ${data.method === "withdraw" && "text-red-600"} text-center`}>{data?.amount}</td>
                 <td className={`badge text-white 
        ${data.status === "pending" && "bg-yellow-600 rounded border-0"}
        ${data.status === "verify" && "bg-orange-500 rounded border-0"}        ${data.status === "success" && "bg-green-500 rounded border-0"}
         ${data.status === "Failed" && "bg-red-500 rounded border-0"}
          
          mt-2 `}>{data?.status}</td>
                 <td className=" py-2">{data?.date?.split(' ')[0]}</td>
             </tr>
            ) 
         }

         {/* <Pagination  totalPosts={myHistory?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} /> */}
        
           

          </tbody>
      
      </table> 

     
      {/* <div className="text-center pt-4"><p class="text-gray-200 text-sm">- End Of Page -</p></div> */}
  </div>
  </section> 

  <div className=" w-full flex justify-end px-6 mb-3">
                    <input className=" px-2 py-1 rounded text-white " ref={dateRef} type="date" /> 
                    <button onClick={handleFIndRef} className="font-bold active px-4 py-2 rounded ms-2 shadow-2xl text-white"> Search </button>
              </div>

        
            </div>
        
        </div>
    );
};

export default History;


// <table className="lg:table  ">
// {/* head */}
// <thead>
//     <tr className="text-md text-white font-semibold text-[16px]">
//         <th className="border-r-2 border-orange-500 text-center">Type</th>
//         <th className="border-r-2 border-orange-500 text-center">Method</th>
//         <th className="border-r-2 border-orange-500 text-center">Amount</th>
//         <th className="border-r-2 border-orange-500 text-center">Status</th>
//         <th className="border-r-2 border-orange-500 text-center">Txn Date</th>
//     </tr>
// </thead>
// <tbody>

//  {
//     myHistory.map(item =>{
//          return <tr className="text-black text-center">
//          <td>{item?.paymentMethod}</td>
//          <td>{item?.method}</td>
//          <td>{item?.amount}</td>
//          <td className={`badge text-white
//           ${item.status === "pending" && "bg-yellow-500 rounded border-0"}
//           ${item.status === "verify" && "bg-orange-500 rounded border-0"}
//           ${item.status === "success" && "bg-green-500 rounded border-0"}
//           ${item.status === "Failed" && "bg-red-500 rounded border-0"}
          
//           mt-2 `}>{item?.status}</td>
//          <td>{item?.date?.split(' ')[0]}</td>
//      </tr>
//     })
//  }   


// </tbody>
// </table>