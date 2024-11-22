import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { serializarForm } from "../../helpers/serializarForm";
import { formatDateForInputs } from "../../utils/dateUtils";


export const EditEvent = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    description:"",
    year:"",
    start_date:"",
    end_date:"",
    event_type:"",
    event_phase:"",
    enterprise:"",
    chief:""
  });
 
    const url1 = `${import.meta.env.VITE_URL_BASE}/eventsid/${id}`;
    const {events, error, isLoading, getData} = useFetch(url1);
  
    const {ok,data}=events
  
    console.log(events)

  const editOnSubmit = async (ev) => {
    ev.preventDefault();
    const formData=serializarForm(ev.target)
    console.log(formData)
    try {
      const url2 = `${import.meta.env.VITE_URL_BASE}/editevent/${id}`;
      const resp = await getData(url2, 'PUT', formData);

      if(resp.ok){
        navigate('/allevents')
        console.log('Evento editado');
      } else{
        console.log('Error al editar');
      }

    } catch (error){
      console.log(error, 'No se ha editado el evento');
      
    }
  }
  

  return (
    <>
    <h1 className="h1">Editar evento</h1>
   
   <section>
   <div className="box">
    {
      isLoading 
        ? 
          <p>CARGANDO ...</p>

        :
        <form className="eventform"
        onSubmit={editOnSubmit}>

          <label htmlFor="name" className="labels">Nombre del evento:</label>
          <input  type="text" 
                  id="name"  
                  name="name" 
                  placeholder="Nombre del evento" 
                  className="inputform"
                  required
                  defaultValue={data.name}
                  // onChange={handlerChange}
                  />
          <label htmlFor="description" className="labels">Breve descripción:</label>
          <input  type="text" 
                  id="description" 
                  name="description" 
                  placeholder="Descripción del evento" 
                  className="inputform"
                  required
                  defaultValue={data.description}
                  // onChange={handlerChange}
                  />

          <label htmlFor="year" className="labels">Contratado en:</label>
          <input  type="date" 
                  id="year" 
                  name="year" 
                  className="inputform"
                  required
                  defaultValue={data.year}
                  // onChange={handlerChange}
                  />

          <label htmlFor="start_date" className="labels">Comienza en:</label>
          <input  type="date" 
                  id="start_date" 
                  name="start_date" 
                  className="inputform"
                  required
                  defaultValue={data.start_date}
                  // onChange={handlerChange}
                  />

          <label htmlFor="end_date" className="labels">Finaliza en:</label>
          <input  type="date" 
                  id="end_date" 
                  name="end_date" 
                  className="inputform"
                  defaultValue={data.end_date}
                  // onChange={handlerChange}
                  />

          <label htmlFor="event_phase" className="labels">Fase:</label>
          <select name="event_phase" id="event_phase" className="inputform" required defaultValue={data.event_phase} >
            <option value="1">Notificación evento</option>
            <option value="2">Búsqueda equipo técnico</option>
            <option value="3">Preparación material</option>
            <option value="4">Montaje</option>  
            <option value="5">Directo</option>
            <option value="6">Desmontaje</option>
          </select>

          <label htmlFor="event_type" className="labels">Tipo:</label>
          <select name="event_type" id="event_type" className="inputform" required defaultValue={data.event_type} >
            <option value="1">Festival</option>
            <option value="2">Concierto</option>
            <option value="3">Musical</option>
            <option value="4">Obra de teatro</option>
            <option value="5">Corporativo</option>
            <option value="6">Grabacion</option>
          </select>
          
          <label htmlFor="enterprise" className="labels">Empresa que contrata:</label>
          <select name="enterprise" id="enterprise" className="inputform" required defaultValue={data.enterprise} >
            <option value="1">Repsol</option>
            <option value="2">Coca-Cola</option>
            <option value="3">Los 40</option>
            <option value="4">Marriot</option>
            <option value="5">Movistar</option>
            <option value="6">Netflix</option>
          </select>

          <label htmlFor="chief" className="labels">Jefe de equipo:</label>
          <select name="chief" id="chief" className="inputform" required defaultValue={data.chief} >
            <option value="1">Juan</option>
            <option value="2">María</option>
            <option value="3">Javier</option>
          </select>

          <button className="button" type='submit'>Editar evento</button>

          <button className="button">
              <NavLink 
              to='/allevents'>
                Cancelar</NavLink>
          </button>
        
          <button className="button">
                <NavLink 
                to='/admin'>
                    Home Admin</NavLink>
          </button>
    
      </form>
    }
       
    </div>
   </section>





    </>
  )
}
