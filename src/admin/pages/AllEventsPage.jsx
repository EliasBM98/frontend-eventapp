import { NavLink } from "react-router-dom";
import { EventGrid } from "./EventGrid";

export const AllEventsPage = () => {



  return (
    <>
    <h1 className="h1">Todos los eventos</h1>


     <div className="box">
          <button className="button" type='submit'>Buscar evento</button>
          <input type="text" name='name' id='name' placeholder="Nombre del evento" className="inputform"/>
      </div>
   
    <div>
        <button className="button">
            <NavLink 
            to='/newevent'>
                Crear evento</NavLink>
        </button>
    </div>

    <section>
      {
          <EventGrid/>
      }
    </section>

    <button className="button">
            <NavLink 
            to='/admin'>
                Home Admin</NavLink>
    </button>
    </>
  )
}
