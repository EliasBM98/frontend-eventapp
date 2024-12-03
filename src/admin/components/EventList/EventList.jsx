import { Link, NavLink } from "react-router-dom";
import { formatDate } from "../../../utils/dateUtils";
import { useState } from "react";
import {FaBuffer} from "react-icons/fa";

export const EventList = ({id, name, description, year, start_date, end_date, phase, type, enterprise, chief}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
  };


  const dateFormat = formatDate(start_date);

  return (
    <>
      <td className="tablecell">{id}</td>
      <td className="tablecell">{name}</td>
      <td className="tablecell">{enterprise}</td>
      <td className="tablecell">{dateFormat}</td>


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
                  to={`/eventdetails/${id}`}>
                        Detalles
                </NavLink>
              </button>
            </li>

            <li>
              <button className="btn bg-dark btn-small btn-table">
                <NavLink 
                  to={`/editevent/${id}`}>
                    Editar
                </NavLink>
              </button>
            </li>

            <li>
              <button className="btn bg-dark btn-small btn-table btn-delete">
                <NavLink 
                  to={`/deleteevent/${id}`}>
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



            {/*<td>
            <div className="action_select">
            <p>Opciones</p>
          <ul>
          
          <li>
            <button className="button">
              <NavLink 
              to={`/eventdetails`}>
                  Detalles + id en link
              </NavLink>
            </button>
          </li>

          <li>
            <button className="button">
              <NavLink 
              to={`/editevent`}>
                  Editar + id en link
              </NavLink>
            </button>
          </li>

          <li>
          <button className="deletebutton">
              <NavLink 
              to={`/deleteevent`}>
                  Borrar + id en link
              </NavLink>
          </button>        
          </li>

          </ul>
        </div>
            </td>*/}
