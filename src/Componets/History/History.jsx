import useHistory from "../Hooks/useHistory";


const History = () => { 

    const [myHistory]=useHistory();
    console.log(myHistory);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-gray-600">
                    {/* head */}
                    <thead>
                        <tr className="text-md text-white font-semibold text-[16px]">
                            <th className="border-r-2 border-orange-500 text-center">Type</th>
                            <th className="border-r-2 border-orange-500 text-center">Method</th>
                            <th className="border-r-2 border-orange-500 text-center">Amount</th>
                            <th className="border-r-2 border-orange-500 text-center">Status</th>
                            <th className="border-r-2 border-orange-500 text-center">Txn Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myHistory?.map(item => {
                            return <tr className="text-black text-center">
                            <th>{item?.paymentMethod}</th>
                            <th>{item?.method}</th>
                            <td>{item?.amount}</td>
                            <td className={`badge text-white
                             ${item.status === "pending" && "badge-warning"}
                             ${item.status === "verify" && "badge-warning"}
                             ${item.status === "success" && "badge-success"}
                             ${item.status === "Failed" && "badge-error"}
                             
                             mt-2 `}>{item?.status}</td>
                            <td>{item?.date?.split(' ')[0]}</td>
                        </tr>
                        })}
                        
                       


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;