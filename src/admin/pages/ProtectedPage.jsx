import {useContext} from "react";
import { UserContext } from "../../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

import './ProtectedPage.css'

export const ProtectedPage = () => {

  const {logout, mensaje2} = useContext(UserContext);
  const navigate = useNavigate();

  const handlerClick = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <h1 className="h1">Home page admin</h1>
      <h2 className="h2">{mensaje2}</h2>

    <div className="container">
      <div className="box1">
        <button className="button">
            <NavLink 
            to='/allevents'>
              Todos los eventos</NavLink>
        </button>

        <button className="button"> Ir a equipos</button>
      </div>
    </div>

      <button onClick={handlerClick}>Log Out</button>
    </>
  )
}




