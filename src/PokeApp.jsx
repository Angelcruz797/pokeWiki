import { NavLink, Route, Routes } from "react-router-dom"
import { LobbyPoke } from "./Pages/lobby/LobbyPoke"
import { PokeWiki } from "./Pages/searchPoke/PokeWiki"
import './styles.css'
import { TypeInfo,Types } from "./pages/type/"
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
