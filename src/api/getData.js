import axios from 'axios';
import { key } from './config';

export const getData = (url, page = 1) =>
    axios.get(`${url}?key=${key}${page > 1 ? `&page=${page}` : ''}`);