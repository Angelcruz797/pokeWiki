import { useState } from "react"

export const SearchPokemon = ({setPokemon}) => {
    
    const [inputValue, setInputValue] = useState('');


    const onInputChange=({target})=>{
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        const newInputValue=inputValue.trim().toLowerCase()
        if(newInputValue.length<1)return
        setPokemon([newInputValue])

        setInputValue('')
    }

  
  return (
    <>
        <form onSubmit={onSubmit}>
            <input
                placeholder="Search a pokemon"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    </>
  )
}
