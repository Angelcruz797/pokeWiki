import { useEffect, useState } from "react"
import { getApiFetch } from "../helpers/getApiFetch";

export const useFetch = (path,name) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getData=async()=>{
        const newData= await getApiFetch(path,name);
        setData({...newData})
        setIsLoading(false)
    }

    useEffect(()=>{
        getData()
    },[])
    return{
        data,
        isLoading,
    }
}