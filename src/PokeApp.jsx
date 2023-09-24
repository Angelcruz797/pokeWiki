import { NavLink, Route, Routes } from "react-router-dom"
import { LobbyPoke } from "./components/LobbyPoke"
import { PokeWiki } from "./components/searchPoke/PokeWiki"
import './styles.css'
export const PokeApp = () => {

    
  return (
    <>
    <NavLink 
    className={({isActive})=>`nav-link ${isActive? 'active':''}`}
    to='/'>
        <p>lobby</p>
    </NavLink>
    <NavLink 
    className={({isActive})=>`nav-link ${isActive? 'active':''}`}
    to='/search-poke'>
        <p>Search Pokemon</p>
    </NavLink>
        <Routes>
            <Route path="/" element={<LobbyPoke/>}/>
            <Route path="/search-poke" element={<PokeWiki/>}/>
            <Route path="/" element={<LobbyPoke/>}/>
            <Route path="*" element={<LobbyPoke/>}/>
        </Routes>
    </>
  )
}
