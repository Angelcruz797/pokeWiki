import { useParams } from "react-router"
import { useFetch } from "../../hook/useFetch"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const TypeInfo = () => {
  const {id}=useParams();
  const {data,isLoading}= useFetch('type/',id);
  const {name,damage_relations}=data;
  return (
    <>
      {isLoading && <h4 style={{margin:'auto',}}>Loading...</h4>}
      
      {!isLoading && (
        <>
          <h3>{name}</h3>
          <Link to='..' relative="path">back</Link>
        <div className="all-relations">

          {damage_relations.double_damage_from.length>0 && <div className="container-realtions">
            <h4>from x2</h4>
            <ul>
              {damage_relations.double_damage_from.map(type=>{
                const url=type.url.split('/');
                return( <p to={'../types/'+url[6]} key={url[6]}>{type.name}</p>)
              })}
            </ul>
          </div>}

          {damage_relations.double_damage_to.length>0 && <div className="container-realtions">
            <h4>to x2</h4>
            <ul>
              {damage_relations.double_damage_to.map(type=>{
                const url=type.url.split('/');
                return( <p to={url[6]} key={url[6]}>{type.name}</p>)
              })}
            </ul>
          </div>}

          {damage_relations.half_damage_from.length>0 && <div className="container-realtions">
            <h4>from 1/2</h4>
            <ul>
              {damage_relations.half_damage_from.map(type=>{
                const url=type.url.split('/');
                return( <p to={url[6]} key={url[6]}>{type.name}</p>)
              })}
            </ul>
          </div>}

          {damage_relations.half_damage_to.length>0 && <div className="container-realtions">
            <h4>to 1/2</h4>
            <ul>
              {damage_relations.half_damage_to.map(type=>{
                const url=type.url.split('/');
                return( <p to={url[6]} key={url[6]}>{type.name}</p>)
              })}
            </ul>
          </div>}

          {damage_relations.no_damage_from.length>0 && <div className="container-realtions">
            <h4>no damage from</h4>
            <ul>
              {damage_relations.no_damage_from.map(type=>{
                const url=type.url.split('/');
                return( <p to={url[6]} key={url[6]}>{type.name}</p>)
              })}
            </ul>
          </div>}

          {damage_relations.no_damage_to.length>0 && <div className="container-realtions">
            <h4>no damage to</h4>
            <ul>
              {damage_relations.no_damage_to.map(type=>{
                const url=type.url.split('/');
                return( <p to={url[6]} key={url[6]}>{type.name}</p>)
              })}
            </ul>
          </div>}


        </div>
        </>
      )}
    </>
  )
}
