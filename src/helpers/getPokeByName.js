
export const getPokeByName =async(pokemon)=>{
    try {

        const url=`https://pokeapi.co/api/v2/pokemon/${pokemon}`

    const resp=await fetch(url);
    const {sprites,abilities,name,id,types}=await resp.json();

    const jData={
        name,
        sprites:{...sprites},
        abilities:[...abilities],
        id,
        types:[...types],
    }
    return {jData}
        
    } catch (error) {
        console.error(error)
        return {jData:undefined}
    }
}