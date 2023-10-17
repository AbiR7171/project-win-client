import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const useHistory = () => { 

    const id=useParams();
    console.log(id, "id");
    
    const{data: myHistory=[], refetch}=useQuery({
        queryKey:['number'],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:5000/myHistory?id=${id.id}`);
            return res.data
        }
    })

    return[myHistory, refetch]
};

export default useHistory;