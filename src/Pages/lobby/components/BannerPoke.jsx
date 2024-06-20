import React from 'react'
import {useFetch} from '../../../hook/useFetch'

export const BannerPoke = ({url}) => {
    const last = url.split("/")

    const {data,isLoading}=useFetch(`pokemon/${last[last.length-2]}`)
  return (
    <>
    {!isLoading && (
      <section className='banners'>
    
        <img src={data.sprites.other.dream_world.front_default} alt="pokemon"/>
        <div className='container-icons'>
          {data.types.map((type,k)=><div className={`bIcon bIcon-${type.type.name}`} key={k}></div>)}
        </div>
        <h2>{data.name} </h2>
        <h4>#{data.id}</h4>
      </section>
    )}
    </>
  )
}
