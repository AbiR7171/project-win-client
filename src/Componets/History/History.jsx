

const History = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-md">
                            <th className="border-r-2 border-orange-500">Type</th>
                            <th className="border-r-2 border-orange-500">Amount</th>
                            <th className="border-r-2 border-orange-500">Status</th>
                            <th>Txn Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>Bkash</th>
                            <td>1000</td>
                            <td className="badge badge-success">Success</td>
                            <td>10-10-2021</td>
                        </tr>
                        <tr>
                            <th>Nogod</th>
                            <td>1000</td>
                            <td className="badge badge-error">Failed</td>
                            <td>10-10-2024</td>
                        </tr>
                        


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;