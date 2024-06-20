export const getAllPokes = async(amount) => {
try {
    const url =`https://pokeapi.co/api/v2/pokemon?offset=${amount}&limit=30`;
    const resp =await fetch(url);

    const data = await resp.json();

    return {
        ...data
    };
    
} catch (e) {
    console.error(e);
}
}
