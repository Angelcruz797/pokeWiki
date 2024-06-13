import { Link } from "react-router-dom"

export const DataInfo = ({name,sprites,abilities,id,types}) => {
    // console.log(abilities)
  return (
    <div className="data-poke" key={id}>

        {/* <div className="mini-poke"><img src={sprites.other.showdown.front_default}/></div> */}


        <div className="container"> 
            <img src={sprites.other.dream_world.front_default}/>
        </div>

        <h3>{name}  <span>#{id}</span></h3>

        <hr />

        <div className="container ">
            <h4>types:</h4>
            <span className="all-Column">
                {types.map(({type})=>{
                const url=type.url.split('/')
                return <Link to={'/types/'+url[6]} key={type.name} className={`type ${type.name}`}>{type.name}</Link>
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
