import axios from 'axios';
import { url_user } from './helper';

export const getUser = async (id,token) => {
    const res = await axios.post(url_user+`/user/${id}`,{
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