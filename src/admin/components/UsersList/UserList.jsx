import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {FaBuffer} from "react-icons/fa";

export const UserList = ({id, name, job_position, user_function}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleMenuLeave = () => {
      setIsMenuOpen(false);
    };
  
  

  return (
    <>
      <td className="tablecell">{id}</td>
      <td className="tablecell">{name}</td>
      <td className="tablecell">{job_position}</td>
      <td className="tablecell">{user_function}</td>
      <td>
            <div  className="action_select" 
                onClick={handleMenuToggle}
                onMouseLeave={handleMenuLeave}
                >
            
            <div className="icon-container">
                <p className="icon"><FaBuffer/></p>
            </div>
            
            <ul className={`${isMenuOpen ? "open" : ""}`}
              onMouseLeave={handleMenuLeave}
              >
                
            <li>
              <button className="btn bg-dark btn-small btn-table">
                <NavLink 
                  to={`/userdetails/${id}`}>
                        Detalles
                </NavLink>
              </button>
            </li>

            <li>
              <button className="btn bg-dark btn-small btn-table">
                <NavLink 
                  to={`/edituser/${id}`}>
                    Editar
                </NavLink>
              </button>
            </li>

            <li>
              <button className="btn bg-dark btn-small btn-table btn-delete">
                <NavLink 
                  to={`/deleteuser/${id}`}>
                    Borrar
                </NavLink>
              </button>        
            </li>

                </ul>
            </div>
        </td>
        </>

  )
}
