
export const getApiFetch = async(path='',name='') => {
    try {
        const url=`https://pokeapi.co/api/v2/${path}${name}`;

        const resp=await fetch(url);

        const data= await resp.json();
        return {
            ...data
        }
    } catch (error) {
        console.log(error)
    }
}