import {NavLink} from "react-router-dom";

export const EventCard = ({name, description, year, start_date, end_date, event_phase, event_type, enterprise, chief}) => {
  return (
    <div className="box">
        <article className='card' key={name}>
            <div className="card-details">
                <h3>Nombre: {name}</h3>
                <p>Descripción: {description}</p>
                <p>Contratado en: {year}</p>
                <p>Comienza en: {start_date}</p>
                <p>Termina en: {end_date}</p>
                <p>En fase: {event_phase}</p>
                <p>Evento de tipo: {event_type}</p>
                <p>Empresa que contrata: {enterprise}</p>
                <p>Lider del equipo{chief}</p>

                <button className="button">
                    <NavLink 
                    to='/editevent'>
                        Editar evento</NavLink>
                </button>

                <button className="button">
                    <NavLink 
                    to='/deleteevent'>
                        Borrar evento</NavLink>
                </button>
            </div>
        </article>
    </div>
  )
}
