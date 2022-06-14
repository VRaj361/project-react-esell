import axios from "axios";
import {useMutation} from 'react-query'

const getAllProducts=()=>{
    return axios.get("http://localhost:9999/products");
}
export function useGetAllProducts(){
    return useMutation(getAllProducts)
}