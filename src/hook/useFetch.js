import { useEffect, useState } from "react"
import { getApiFetch } from "../helpers/getApiFetch";

export const useFetch = (path,name) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getData=async()=>{
        setIsLoading(false)
        newData= await getApiFetch(path,name);
        setData({...newData})
    }

    useEffect(()=>{
        getData()
    },[])
    return{
        data,
        isLoading,
    }
}