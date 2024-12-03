import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { serializarForm } from "../../helpers/serializarForm";

export const EditUserPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
  
    const [form, setForm] = useState({
        name:"",
        surname:"",
        email:"",
        password:"",
        job_position:"",
        user_function:"",
        role:""

    });

    const url1 = `${import.meta.env.VITE_URL_BASE_AUTH}/usersid/${id}`;
    const {events, error, isLoading, getData} = useFetch(url1);
    
    const {ok,data}=events
  
    console.log(events)

    const editOnSubmit = async (ev) => {
        ev.preventDefault();
        const formData=serializarForm(ev.target)
        console.log(formData)
        try {
          const url2 = `${import.meta.env.VITE_URL_BASE_AUTH}/edituser/${id}`;
          const resp = await getData(url2, 'PUT', formData);
    
          if(resp.ok){
            navigate('/allusers')
            console.log('Usuario editado');
          } else{
            console.log('Error al editar');
          }
    
        } catch (error){
          console.log(error, 'No se ha editado el usuario');
          
        }
      }


  return (
    <>
    <header className="header-section">
      <h1>Editar usuario</h1>
    </header>


    <section>
    <div className="box">
    {
      isLoading 
        ? 
        <p>CARGANDO ...</p>
        :
    <form className="eventform"
    onSubmit={editOnSubmit}>
      <div>
          <label htmlFor="name" className="labels"></label>
          <input  type="text" 
                  id="name"  
                  name="name" 
                  placeholder="Nombre" 
                  className="inputform"
                  required                
                  defaultValue={data.name}/>
      </div>

      <div>
          <label htmlFor="surname" className="labels">Apellidos:</label>
          <input  type="text" 
                  id="surname"  
                  name="surname" 
                  placeholder="Apellidos" 
                  className="inputform"
                  required
                  defaultValue={data.surname}/>
      </div>

      <div>
        <label htmlFor="email" className="labels">Email:</label>
        <input  type="text" 
                id="email"  
                name="email" 
                placeholder="Email" 
                className="inputform"
                required
                defaultValue={data.email}/>
      </div>

      <div>
          <label htmlFor="password" className="labels">Contraseña:</label>
          <input  type="password" 
                  id="password"  
                  name="password" 
                  placeholder="Introduce contraseña" 
                  className="inputform"
                  required
                  defaultValue={data.password}/>
      </div>

      <div>
        <label htmlFor="job_position" className="labels">Puesto de trabajo:</label>
        <input  type="text" 
                id="job_position"  
                name="job_position" 
                placeholder="Puesto de trabajo" 
                className="inputform"
                required
                defaultValue={data.job_position}/>
      </div>

      <div>
        <label htmlFor="user_function" className="labels">Funciones:</label>
        <input  type="text" 
                id="user_function"  
                name="user_function" 
                placeholder="Funciones" 
                className="inputform"
                required
                defaultValue={data.user_function}/>
      </div>

      <div>
        <label htmlFor="role" className="labels">Rol de la cuenta:</label>
        <input  type="text" 
                id="role"  
                name="role" 
                placeholder="User, admin o lead" 
                className="inputform"
                required
                defaultValue={data.role}/>
      </div>

      <div className="flex">
        <button className="btn bg-dark btn-small" type='submit'>Editar usuario</button>

        <button className="btn bg-dark btn-small">
            <NavLink 
            to='/allusers'>
              Cancelar</NavLink>
        </button>
        <button className="btn bg-dark btn-small">
              <NavLink 
              to='/admin'>
                  Home Admin</NavLink>
        </button>
      </div>  

    </form>
    }
    </div>
    </section>
    </>
  )
}
