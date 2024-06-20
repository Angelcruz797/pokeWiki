import { useEffect, useState } from "react"
import { getAllPokes } from "../../helpers/getAllPokes";
import { BannerPoke } from "./components/bannerPoke";
import './lobby.css'
import { Button } from "@mui/material";

export const LobbyPoke = () => {
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const [dataPoke, setDataPoke] = useState({
    count:0,
    pokes:[],
  })
  const {pokes}=dataPoke;
const callPokes= async()=>{
  try {
    setIsLoading(true);
    const data = await getAllPokes(amount);
    setDataPoke({
      ...dataPoke,
      count:data.count,
      pokes:[
        ...dataPoke.pokes,
        ...data.results,
      ]
    })
    setIsLoading(false);
    
  } catch (error) {
    console.error(error)
  }
}

  useEffect(() => {
    callPokes()
  }, [amount])
  

  return (
    <>
      <h1 className="title">Bienvenido</h1>
      <main className="container-pokes">
        <section className="container-banner">
          {isLoading && pokes.length==0 && <div>loading...</div>}

          {pokes.map((poke,i)=>{
            return (
            <BannerPoke key={i} {...poke} />
            )
          })}
        </section>

        {!isLoading && pokes.length>0 && amount<dataPoke.count && <section className="more-pokes"><Button variant="contained"  onClick={()=>{
          setAmount(amount+30)
        }}>More</Button></section>}
      </main>
      
      
    </>
  )
}
