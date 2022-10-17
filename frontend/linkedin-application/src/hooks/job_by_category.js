import axios from 'axios';
import { url_job } from './helper';

export const getJob = async (token,category) => {
    const res = await axios.get(url_job+`/jobs_category/${category}`,{
        headers:{
            'Authorization': `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers':'Content-Type',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Credentials': true
        },
    })

    return res
}    