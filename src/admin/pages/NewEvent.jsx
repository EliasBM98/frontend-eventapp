import { NavLink, useNavigate, useParams} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";


export const NewEvent = () => {
const {form, handlerChange} = useForm();  
const {getData} = useFetch();
const navigate = useNavigate();

//Cambiar el formulario que envio a get data y utulizar formulario de serializar y serializar
const createOnSubmit = async (ev) => {
  ev.preventDefault();
  console.log(form);
  try {
    const url = `${import.meta.env.VITE_URL_BASE}/createevent`;
    const resp = await getData(url, 'POST', form);
    if(resp.ok){
      console.log(resp, 'Evento creado');
      navigate('/allevents');
    } else {
      console.log('Error al crear el evento');
    }
  } catch (error) {
    console.log(error)
  }
};


  return (
    <>
    <header className="header-section">
      <h1>Crear un nuevo evento</h1>
    </header>

      <form className="eventform" 
      onSubmit={createOnSubmit}>

      <div>
        <label htmlFor="name" className="labels">Nombre del evento:</label>
        <input  type="text" 
                id="name"  
                name="name" 
                placeholder="Nombre del evento" 
                className="inputform"
                required 
                value={form.name}
                onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="description" className="labels">Breve descripción:</label>
        <input  type="text" 
                id="description" 
                name="description" 
                placeholder="Descripción del evento" 
                className="inputform"
                required 
                value={form.description}
                onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="year" className="labels">Contratado en:</label>
        <input  type="date" 
                id="year" 
                name="year" 
                className="inputform"
                required 
                value={form.year}
                onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="start_date" className="labels">Comienza en:</label>
        <input  type="date" 
                id="start_date" 
                name="start_date" 
                className="inputform"
                required 
                value={form.start_date}
                onChange={handlerChange}/>
        </div>

      <div>
        <label htmlFor="end_date" className="labels">Finaliza en:</label>
        <input  type="date" 
                id="end_date" 
                name="end_date" 
                className="inputform"
                required 
                value={form.end_date}
                onChange={handlerChange}/>
      </div>
        {/*Para mejorar tengo que hacer una consulta GET en la que me traigo todos los valores para cada select
        Deberia de poder hacer una consulta POST para crear nuevas fases, tipos de evento y enterprise (todos los select son estaticos)
        Ojo con la solicitud y la respuesta XHR estaba pasando mal los tipos de valor y me sacaba errores cuando se contrastaban */}
        <div>  
        <label htmlFor="event_phase" className="labels">Fase:</label>
        <select name="event_phase" id="event_phase" className="inputform" required value={form.event_phase} onChange={handlerChange}>
          <option>Fase:</option>
          <option value="1">Notificación evento</option>
          <option value="2">Búsqueda equipo técnico</option>
          <option value="3">Preparación material</option>
          <option value="4">Montaje</option>
          <option value="7">En vivo</option>
          <option value="8">Desmontaje</option>
        </select>
      </div>      

      <div>
        <label htmlFor="event_type" className="labels">Tipo:</label>
        <select name="event_type" id="event_type" className="inputform" required value={form.event_type} onChange={handlerChange}>
          <option>Tipo:</option>
          <option value="1">Festival</option>
          <option value="2">Concierto</option>
          <option value="3">Musical</option>
          <option value="4">Obra de teatro</option>
          <option value="5">Corporativo</option>
          <option value="6">Grabacion</option>
        </select>
      </div>

      <div>
        <label htmlFor="enterprise" className="labels">Empresa que contrata:</label>
        <select name="enterprise" id="enterprise" className="inputform" required value={form.enterprise} onChange={handlerChange}>
          <option>Empresa:</option>
          <option value="1">Repsol</option>
          <option value="2">Coca-Cola</option>
          <option value="3">Los 40</option>
          <option value="4">Marriot</option>
          <option value="5">Movistar</option>
          <option value="6">Netflix</option>
        </select>
      </div>

      <div>
        <label htmlFor="chief" className="labels">Jefe de equipo:</label>
        <select name="chief" id="chief" className="inputform" required value={form.chief} onChange={handlerChange}>
          <option>Jefe de equipo:</option>
          <option value="1">Pedro</option>
          <option value="2">María</option>
          <option value="3">Javier</option>
        </select>
      </div>


    <div className="flex">
      <button className="btn bg-dark btn-small" type='submit'>Crear evento</button>

      <button className="btn bg-dark btn-small">
          <NavLink 
          to='/allevents'>
            Cancelar</NavLink>
      </button>
      <button className="btn bg-dark btn-small">
            <NavLink 
            to='/admin'>
                Home Admin</NavLink>
      </button>
    </div>  
      </form>
    </>
  )
}
