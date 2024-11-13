import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBarUser = () => {
  return (

    <ul className='navbar'>
        <li className='navelement'>
            <NavLink 
            to='/'
            className={({isActive}) => isActive ? 'menuActivo' : ''}>
                Login</NavLink>
        </li>

        <li className='navelement'>
          <NavLink 
          to='myevents'
          className={({isActive}) => isActive ? 'menuActivo' : ''}>
            Mis eventos</NavLink>
        </li>

        <li className='navelement'>
          <NavLink 
          to='completed'
          className={({isActive}) => isActive ? 'menuActivo' : ''}>
            Eventos completados</NavLink>
        </li>



    </ul>

  )
}