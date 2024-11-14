import { NavLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react"

export const FormSearch = () => {

    const {form, handlerSubmit} = useForm(onNewEvent)

    useEffect(()=>{
        console.log(form)

        if(form.search != "") onNewEvent(form.search)
    }, [form])


  return (

    <div className="container">
      <div className="box1">
        <form onSubmit={handlerSubmit}>
            <button className="button" type='submit'>Buscar evento</button>
            
            <input type="text" name='name' id='name' placeholder="Nombre del evento" className="inputform"/>
        </form>
          <button className="button">
              <NavLink 
              to='/newevent'>
                  Crear evento</NavLink>
          </button>
      </div>
    </div>
  )
}
