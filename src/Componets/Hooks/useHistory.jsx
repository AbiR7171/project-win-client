import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const useHistory = () => { 

    const id=useParams();
    console.log(id, "id");
    
    const{data: myHistory=[], refetch}=useQuery({
        queryKey:['number', id.id],
        queryFn:async()=>{
            const res = await axios.get(`https://win-bdt-server-new.vercel.app/myHistory?id=${id.id}`);
            return res.data
        }
    })

    return[myHistory, refetch]
};

export default useHistory;