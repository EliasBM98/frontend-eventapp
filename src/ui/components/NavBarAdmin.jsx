import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { UserContext } from "../../context/UserContext";
import { useContext } from 'react';


export const NavBarAdmin = () => {

  const {logout, mensaje2} = useContext(UserContext);
  const navigate = useNavigate();

  const handlerClick = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className='flex nav'>
      <button 
      className='btn bg-dark btn-small'
      onClick={handlerClick}>Log Out</button>
    </nav>
  )
}
