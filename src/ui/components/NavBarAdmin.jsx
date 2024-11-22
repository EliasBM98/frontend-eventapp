import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBarAdmin = () => {
  return (
    <ul className='navbar'>
        <li className='navelement'>
            <NavLink 
            to='admin'
            className={({isActive}) => isActive ? 'menuActivo' : ''}>
                Home Admin</NavLink>
        </li>

        <li className='navelement'>
            <NavLink 
            to='newevent'
            className={({isActive}) => isActive ? 'menuActivo' : ''}>
                Crear evento</NavLink>
        </li>

        <li className='navelement'>
            <NavLink 
            to='allevents'
            className={({isActive}) => isActive ? 'menuActivo' : ''}>
                Todos los eventos</NavLink>
        </li>

    </ul>
  )
}
