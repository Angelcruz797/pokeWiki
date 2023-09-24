import { useEffect, useState } from "react"
import { getPokeByName } from "../helpers/getPokeByName";

export const useGetPoke = (pokemon) => {
    const [dataPokemon, setDataPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getPoke=async()=>{
        setIsLoading(true)
        const {jData} = await getPokeByName(pokemon);
        setDataPokemon([jData])
        setIsLoading(false)
    }
    useEffect(()=>{
        getPoke()
    },[])

    return{
        isLoading,
        dataPokemon,
    }
}
