import { useState } from "react"
import { SearchPokemon } from "./components/SearchPokemon"
import { PokeData } from "./components/PokeData";
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
