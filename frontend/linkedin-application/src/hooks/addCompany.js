import axios from 'axios';
import { url_user } from './helper';

export const add_company = async (id,token,post) => {
    const res = await axios.post(url_user+`/add_company/${id}`,post,
        {headers:{
            'Authorization': `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers':'Content-Type',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Credentials': true
        },
});
    return res;
}    
    
    
    
