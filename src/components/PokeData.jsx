import { useEffect, useState } from "react"
import { getPokeApi } from "../helpers/getPokeApi"
import { DataInfo } from "./DataInfo"

export const PokeData = ({pokemon}) => {
    const [dataPokemon, setDataPokemon] = useState([])

    const getDataPokemon=async()=>{
        const newDataPokemon= await getPokeApi(pokemon);
        setDataPokemon([newDataPokemon])
    }
    useEffect(()=>{
        getDataPokemon()
    }
    ,[])


  return (
    <>
        <div className="card-grid">
            {dataPokemon.map(dataPoke=>{
                if(dataPoke===undefined)return <h4 key={pokemon}>No se encontro: {pokemon}</h4>
            return<DataInfo key={pokemon} {...dataPoke}/>
            })}
        </div>
    </>
  )
}