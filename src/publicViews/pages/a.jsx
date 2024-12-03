import { useState } from "react";
import { NavLink } from "react-router-dom";

export const EventList = ({ id, name, enterprise, start_date, phase, type, chief }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <td>
        <button className="button">
          <NavLink to={`/eventdetails/${id}`}>Detalles</NavLink>
        </button>
      </td>

      <td>
        <button className="button">
          <NavLink to={`/editevent/${id}`}>Editar</NavLink>
        </button>
      </td>

      <td>
        <button className="deletebutton">
          <NavLink to={`/deleteevent/${id}`}>Borrar</NavLink>
        </button>
      </td>

      <td>
        <div className="action_select" onClick={handleMenuToggle}>
          <p>Opciones</p>
          {isMenuOpen && (
            <ul>
              <li>
                <button className="button">
                  <NavLink to={`/eventdetails/${id}`}>Detalles</NavLink>
                </button>
              </li>
              <li>
                <button className="button">
                  <NavLink to={`/editevent/${id}`}>Editar</NavLink>
                </button>
              </li>
              <li>
                <button className="deletebutton">
                  <NavLink to={`/deleteevent/${id}`}>Borrar</NavLink>
                </button>
              </li>
            </ul>
          )}
        </div>
      </td>
    </>
  );
};
