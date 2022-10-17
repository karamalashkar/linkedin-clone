import axios from 'axios';
import { url_job } from './helper';

export const applyJob = async (token,post) => {
    const res = await axios.post(url_job+`/apply_job`,post,{
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