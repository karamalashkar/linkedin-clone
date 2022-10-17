import axios from 'axios';
import { url } from './helper';

export const addUser = async (post) => {
    const res = await axios.post(url+'/signup',post)
    return res;
};