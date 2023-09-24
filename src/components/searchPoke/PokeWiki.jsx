import { useState } from "react"
import { SearchPokemon } from "./SearchPokemon"
import { PokeData } from "./PokeData";
import './search.css'




export const PokeWiki = () => {
    const [pokemon, setPokemon] = useState([]);


  return (
    <>
      <div className="container-search">
        <h2>Poke Wiki</h2>
        <SearchPokemon setPokemon={setPokemon}/>

        {pokemon.map(poke=><PokeData key={poke} pokemon={poke} />)}
      </div>
    </>
  )
}
