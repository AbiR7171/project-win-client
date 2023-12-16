import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const useUsers = () => {
    const id=useParams();
    console.log(id, "user");
    
    const{data: users=[], refetch}=useQuery({
        queryKey:['number'],
        queryFn:async()=>{
            const res = await axios.get(`https://win-bdt-server-new.vercel.app/user?id=${id.id}`);
            return res.data
        }
    })

    return[users, refetch]
};

export default useUsers;