import { NavLink} from "react-router-dom";

export const DeleteEvent = () => {
  return (
    <>
      <h1 className="h1">Eliminar evento</h1>
      <h2 className="h2">Estas seguro de que quieres eliminar el evento</h2>



      <div>
      <button className="button">Confirmar borrar</button>

      <button className="button">
          <NavLink 
          to='/allevents'>
            Cancelar</NavLink>
      </button>

    </div>
    </>

  )
}
