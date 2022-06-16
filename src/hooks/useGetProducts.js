import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL_API } from "../api/config";
import { getData } from "../api/getData";
import { useDispatch } from 'react-redux';
import {setIsLoading} from '../actions/index'

export const useGetProducts = () => {
    const page = useSelector(state => state.productPage);
    // const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch()

    const [productsList, setProductosList] = useState([]);

    const randomNumber = (min = 5, max = 20) =>
        (Math.floor(Math.random() * (max - min + 1)) + min) * 10;

    const urlGamesList = `${URL_API}/games`;

    useEffect(() => {
      async function fetchData () {
         const data = await getData(urlGamesList, page);
         const results = data.data.results;
         const newList = results.map(obj => ({ ...obj, price: randomNumber() }))

         setProductosList(newList);
         dispatch(setIsLoading(false));
      }
      fetchData();
    }, [page]);

    return {productsList,};
}