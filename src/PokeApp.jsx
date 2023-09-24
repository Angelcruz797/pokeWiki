import { NavLink, Route, Routes } from "react-router-dom"
import { LobbyPoke } from "./components/LobbyPoke"
import { PokeWiki } from "./components/searchPoke/PokeWiki"
import './styles.css'
import { TypeInfo,Types } from "./components/type/"
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
    <NavLink 
    className={({isActive})=>`nav-link ${isActive? 'active':''}`}
    to='/types'>
        <p>Types</p>
    </NavLink>
    
        <Routes>
            <Route path="/" element={<LobbyPoke/>}/>
            <Route path="/search-poke" element={<PokeWiki/>}/>
            <Route path="/types" element={<Types/>}/>
            <Route path="/types/:id" element={<TypeInfo/>}/>
            <Route path="*" element={<LobbyPoke/>}/>
        </Routes>
    </>
  )
}
