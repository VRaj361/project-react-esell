import axios from "axios";
import {useMutation} from 'react-query'

// const sendAllFiles=(data)=>{
//     return axios.post("https://script.google.com/macros/s/AKfycbznRfbRxJ8S4bxy3wxvx2mfKwQfi4JXP098wIBuHCuoOX5yCHWTRdkgA_BJCtQXohgSdg/exec",data);
// }
// export function useSendFiles(){
//     return useMutation(sendAllFiles,{onSuccess:()=>{console.log("success")},onError:()=>{console.log("Error");},onSettled:()=>{console.log("settled")},onMutate:()=>{console.log("Mutate");}})
    
// }
export const obj1=""
const addData = () => {
    axios.get("http://localhost:9999/user").then((res) => {
        res.data.map((e) => {
            if (e.userid === JSON.parse(sessionStorage.getItem("data")).userid) {
                obj1=e;
                console.log(obj1)
                return e;
            }
        })
    })
}
export function useAddData() {
    return useMutation(addData)
}