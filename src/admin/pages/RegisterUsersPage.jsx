import { NavLink, useNavigate} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";

export const RegisterUsersPage = () => {
  const {form, handlerChange} = useForm();  
  const {getData} = useFetch();
  const navigate = useNavigate();

  const createOnSubmit = async (ev) => {
    ev.preventDefault();
    console.log(form);
    try {
      const url = `${import.meta.env.VITE_URL_BASE_AUTH}/createuser`;
      const resp = await getData(url, 'POST', form);
      if(resp.ok){
        console.log(resp, 'Usuario creado');
        navigate('/allusers');
      } else {
        console.log('Error al crear el usuario');
      }
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <>
    <header className="header-section">
      <h1>Registro de nuevos usuarios</h1>
    </header>

    <form className="eventform"
    onSubmit={createOnSubmit}>
      <div>
          <label htmlFor="name" className="labels"></label>
          <input  type="text" 
                  id="name"  
                  name="name" 
                  placeholder="Nombre" 
                  className="inputform"
                  required                
                  value={form.name}
                  onChange={handlerChange}/>
      </div>

      <div>
          <label htmlFor="surname" className="labels">Apellidos:</label>
          <input  type="text" 
                  id="surname"  
                  name="surname" 
                  placeholder="Apellidos" 
                  className="inputform"
                  required
                  value={form.surname}
                  onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="email" className="labels">Email:</label>
        <input  type="text" 
                id="email"  
                name="email" 
                placeholder="Email" 
                className="inputform"
                required
                value={form.email}
                onChange={handlerChange}/>
      </div>

      <div>
          <label htmlFor="password" className="labels">Contraseña:</label>
          <input  type="password" 
                  id="password"  
                  name="password" 
                  placeholder="Introduce contraseña" 
                  className="inputform"
                  required
                  value={form.password}
                  onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="job_position" className="labels">Puesto de trabajo:</label>
        <input  type="text" 
                id="job_position"  
                name="job_position" 
                placeholder="Puesto de trabajo" 
                className="inputform"
                required
                value={form.job_position}
                onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="user_function" className="labels">Funciones:</label>
        <input  type="text" 
                id="user_function"  
                name="user_function" 
                placeholder="Funciones" 
                className="inputform"
                required
                value={form.user_function}
                onChange={handlerChange}/>
      </div>

      <div>
        <label htmlFor="role" className="labels">Rol de la cuenta:</label>
        <input  type="text" 
                id="role"  
                name="role" 
                placeholder="User, admin o lead" 
                className="inputform"
                required
                value={form.role}
                onChange={handlerChange}/>
      </div>

      <div className="flex">
        <button className="btn bg-dark btn-small" type='submit'>Crear usuario</button>

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
    </>
  )
}
