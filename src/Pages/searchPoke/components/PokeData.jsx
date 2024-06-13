import { DataInfo } from "./DataInfo"
import { useGetPoke } from "../../hook/useGetPoke"

export const PokeData = ({pokemon}) => {
    const {dataPokemon,isLoading}= useGetPoke(pokemon);
  return (
    <>
        <div className="card-grid">
            {isLoading && <h4>Loading...</h4>}
            {dataPokemon.map(dataPoke=>{
                if(dataPoke===undefined)return <h4 key={pokemon}>No se encontro: {pokemon}</h4>
            return<DataInfo key={pokemon} {...dataPoke}/>
            })}
        </div>
    </>
  )
}