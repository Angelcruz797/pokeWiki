import { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";

export const SearchPokemon = ({setPokemon}) => {
    
    const [inputValue, setInputValue] = useState('');
    const [namePoke, setNamePoke] = useState([]);

    const onInputChange=({target})=>{
        const newValue = target.value;
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        const newInputValue=inputValue.trim().toLowerCase()
        if(newInputValue.length==0)return
        setPokemon([newInputValue])

        setInputValue('')
    }

    const Pokes=async()=>{
        try {
            const url =`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`;
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data.results)
            const name =data.results.map(poke=>poke.name)
            setNamePoke(()=>[...name])
        } catch (error) {
            console.error(error)
        }
      }
    useEffect(() => {
      Pokes()
    }, [])

  
  return (
    <>
        

            <Autocomplete 
            id="search_pokemons"
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            options={namePoke}
            renderInput={params=>(
                <form ref={params.InputProps.ref} onSubmit={onSubmit}>
                    <input
                        {...params.inputProps}
                        name="search-poke"
                        placeholder="Search a pokemon"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </form> 
            )}
            />


            {/*  */}
    </>
  )
}
