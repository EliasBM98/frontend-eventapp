import {useContext} from "react";
import { UserContext } from "../../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

import './ProtectedPage.css'

export const ProtectedPage = () => {
  return (
    <>
    <header className="header-section">
      <h1>Home page admin</h1>
      {/* <h2 className="h2">{mensaje2}</h2> */}
    </header>

      <div className="navegacion flex">
        <button className="btn bg-dark">
            <NavLink 
            to='/allevents'>
              Todos los eventos</NavLink>
        </button>

        <button className="btn bg-dark"> 
          <NavLink
          to='/allusers'> 
            Ir a usuarios
          </NavLink> </button>
          <button className="btn bg-dark"> 
          <NavLink
          to='/admin'> 
            Ir a equipos
          </NavLink> </button>
      </div>
    </>
  )
}




