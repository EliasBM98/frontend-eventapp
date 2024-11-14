import { NavLink} from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const EditEvent = () => {
  const {form, handlerSubmit, handlerChange} = useForm();

/*if(!evento) {
return <Navigate to='/'}*/

  return (
    <>
    <h1 className="h1">Editar evento</h1>
    <div className="box">
      <form className="eventform" onSubmit={handlerSubmit}>

      <input  type="text" 
              id="name"  
              name="name" 
              placeholder="Nombre del evento" 
              className="inputform"
              required  
              value={form.name} 
              onChange={handlerChange}/>
              
      <input  type="text" 
              id="description" 
              name="description" 
              placeholder="Descripción del evento" 
              className="inputform"
              required 
              value={form.description}
              onChange={handlerChange}/>

      <label htmlFor="year">Evento contratado en:</label>
      <input  type="date" 
              id="year" 
              name="year" 
              className="inputform"
              required 
              value={form.year}
              onChange={handlerChange}/>

      <label htmlFor="start_date">Evento comienza en:</label>
      <input  type="date" 
              id="start_date" 
              name="start_date" 
              className="inputform"
              required 
              value={form.start_date}
              onChange={handlerChange}/>

      <label htmlFor="end_date">Evento finaliza en:</label>
      <input  type="date" 
              id="end_date" 
              name="end_date" 
              className="inputform"
              required 
              value={form.end_date}
              onChange={handlerChange}/>

        <label htmlFor="phase">Fase del evento:</label>
        <select name="phase" id="phase" className="inputform" required value={form.event_phase} onChange={handlerChange}>
          <option value="1">Notificación evento</option>
          <option value="2">Búsqueda equipo técnico</option>
          <option value="3">Preparación material</option>
          <option value="4">Montaje</option>
          <option value="5">Directo</option>
          <option value="6">Desmontaje</option>
        </select>

      <label htmlFor="phase">Tipo de evento:</label>
      <select name="type" id="type" className="inputform" required value={form.event_type} onChange={handlerChange}>
        <option value="1">Festival</option>
        <option value="2">Concierto</option>
        <option value="3">Musical</option>
        <option value="4">Obra de teatro</option>
        <option value="5">Corporativo</option>
        <option value="6">Grabacion</option>
      </select>
      

      <input  type="text" 
              id="enterprise" 
              name="enterprise" 
              placeholder="Empresa organizadora" 
              className="inputform"
              required 
              value={form.enterprise}
              onChange={handlerChange}/>

      <select name="chief" id="chief" className="inputform" required value={form.chief} onChange={handlerChange}>
        <option value="chief1">Lider de equipo 1</option>
        <option value="chief2">Lider de equipo 2</option>
        <option value="chief3">Lider de equipo 3</option>
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
    </div>



    </>
  )
}
