import { useState } from "react"

export const SearchPokemon = ({setPokemon}) => {
    
    const [inputValue, setInputValue] = useState('');


    const onInputChange=({target})=>{
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        const newInputValue=inputValue.trim()
        newInputValue.toLocaleLowerCase()
        if(newInputValue.length<1)return
        setPokemon([newInputValue])

        setInputValue('')
    }

  
  return (
    <>
        <form onSubmit={onSubmit}>
            <input
                placeholder="Busca a el pokemon"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    </>
  )
}
