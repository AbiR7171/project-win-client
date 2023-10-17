import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useBank = () => {
    const{data:bank=[], refetch}=useQuery({
        queryKey:['bank'],
        queryFn:async()=>{
             const res = await axios.get('http://localhost:5000/bank')
             return res.data;
        }
    })

    return [bank, refetch]
};

export default useBank;