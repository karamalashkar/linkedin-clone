import axios from 'axios';
import { url } from './helper';

export const login = async (post) => {
    const res = await axios.post(url+'/login',post)
    return res;
};