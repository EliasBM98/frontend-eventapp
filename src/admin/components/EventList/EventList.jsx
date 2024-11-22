import { Link, NavLink } from "react-router-dom";
import { formatDate } from "../../../utils/dateUtils";
import { useState } from "react";

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
      <td className="tablecell">{name}</td>
      <td className="tablecell">{enterprise}</td>
      <td className="tablecell">{dateFormat}</td>
      <td className="tablecell">{phase}</td>
      <td className="tablecell">{type}</td>
      <td className="tablecell">{chief}</td>

      {/*<td>
        <button className="button">
          <NavLink 
            to={`/eventdetails/${id}`}>
              Detalles</NavLink>
        </button>
        </td>

        <td>
          <button className="button">
          <NavLink 
            to={`/editevent/${id}`}>
              Editar</NavLink>
          </button>
        </td>

        <td>
          <button className="deletebutton">
            <NavLink 
            to={`/deleteevent/${id}`}>
                Borrar</NavLink>
          </button>
        </td>*/}

        <td>
          <div  className="action_select" 
                onClick={handleMenuToggle}
                onMouseLeave={handleMenuLeave}>
            <p>Opciones</p>
          <ul className={isMenuOpen ? "open" : ""}
              onMouseLeave={handleMenuLeave}>
                
            <li>
              <button className="button">
                <NavLink 
                  to={`/eventdetails/${id}`}>
                        Detalles
                </NavLink>
              </button>
            </li>

            <li>
              <button className="button">
                <NavLink 
                  to={`/editevent/${id}`}>
                    Editar
                </NavLink>
              </button>
            </li>

            <li>
              <button className="deletebutton">
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
