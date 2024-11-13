import { NavLink} from "react-router-dom";

export const NewEvent = () => {
  return (
    <>
    <h1 className="h1">Crear un nuevo evento</h1>
    <div className="box">
      <form className="eventform">


      <input type="text" id="name" name="name" placeholder="Nombre del evento" className="inputform"/>

      <input type="text" id="description" name="description" placeholder="Descripción del evento" className="inputform"/>

      <label htmlFor="year">Evento contratado en:</label>
      <input type="date" id="year" name="year" className="inputform"/>

      <label htmlFor="year">Evento comienza en:</label>
      <input type="date" id="startdate" name="startdate" className="inputform"/>

      <label htmlFor="year">Evento finaliza en:</label>
      <input type="date" id="startdate" name="startdate" className="inputform"/>

      <select name="type" id="type" className="inputform">
        <option value="1">Festival</option>
        <option value="2">Concierto</option>
        <option value="3">Musical</option>
        <option value="4">Obra de teatro</option>
        <option value="5">Corporativo</option>
        <option value="6">Grabacion</option>
      </select>

      <input type="text" id="enterprise" name="enterprise" placeholder="Empresa organizadora" className="inputform"/>

      <select name="chief" id="chief" className="inputform">
        <option value="chief1">Lider de equipo 1</option>
        <option value="chief2">Lider de equipo 2</option>
        <option value="chief3">Lider de equipo 3</option>
      </select>

      <button className="button" type='submit'>Crear evento</button>


      
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
