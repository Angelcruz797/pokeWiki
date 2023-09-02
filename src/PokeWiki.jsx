import { useState } from "react"
import { SearchPokemon } from "./components/SearchPokemon"
import { PokeData } from "./components/PokeData";


export const PokeWiki = () => {
    const [pokemon, setPokemon] = useState([]);


  return (
    <>
        <h1>Poke Wiki</h1>
        <SearchPokemon setPokemon={setPokemon}/>

        {pokemon.map(poke=><PokeData key={poke} pokemon={poke} />)}
    </>
  )
}
