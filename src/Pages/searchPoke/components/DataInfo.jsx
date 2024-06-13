import { Link } from "react-router-dom"

export const DataInfo = ({name,sprites,abilities,id,types}) => {
    // console.log(abilities)
  return (
    <div className="data-poke" key={id}>

        <h3>{name} <span>#{id}</span></h3>

        <hr />

        <div className=" container "> 
            <h4> {name} default:</h4>
            <img src={sprites.other.showdown.front_default}/>
            <img src={sprites.back_default}/>
        </div>

        {sprites.front_shiny && <>
            <hr />

            <div className=" container "> 
                <h4> {name} shiny:</h4>
                <img src={sprites.front_shiny}/>
                <img src={sprites.back_shiny}/>
            </div>
        </>}

        <hr />

        <div className="container ">
            <h4>types:</h4>
            <span className="all-Column">
                {types.map(({type})=>{
                const url=type.url.split('/')
                return <Link to={'/types/'+url[6]} key={type.name}>{type.name}</Link>
            })} 
            </span>
        </div>

        <hr />

        <div className="container ">

            <h4>abilities:</h4>
            <span className="all-Column">
                {abilities.map(({ability,is_hidden})=>{
                    if(is_hidden)return
                    return <p key={ability.name}>{ability.name}</p>
                })}
            </span>
        </div>
        
        
        {abilities.map(({ability,is_hidden})=>is_hidden &&(
        <>
            <hr />
            <div className="container ">
                <h4>hidden abilities:</h4>
                <span className="all-Column">
                    <p key={ability.name} className="hidden_ability">{ability.name}</p>
                </span>
            </div>
        </>
        ))}



    </div>
  )
}
