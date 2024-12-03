import {useContext, useState} from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  /*const {mensaje, user, setUser, isAuthenticated, login} = useContext(UserContext);
  const navigate = useNavigate()

  const handlerSubmit = (ev) => {
    ev.preventDefault()

    const nombre = ev.target.name.value.trim();
    const password = ev.target.password.value.trim();


    const logeredUser = {id:1, nombre, password}
    console.log(logeredUser)

    setUser(logeredUser);
    login();
    navigate('/admin')*/


    const {role, setRole, login} = useContext(UserContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
  
    const handleSubmit = async (ev) => {
      ev.preventDefault();
  
      try {
        const response = await fetch(`${import.meta.env.VITE_URL_BASE_AUTH}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          localStorage.setItem('token', data.token); // Guardar token en localStorage
          const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
          localStorage.setItem('role', decodedToken.role); // Guardar rol del usuario
          if(decodedToken.role == 'user') {
            login();
            navigate('/user'); // Redirigir al home de user
          } else if(decodedToken.role == 'admin'){
            login();
            navigate('/admin'); // Redirigir al home de admin
          } else {
            setErrorMessage('Direccion de correo sin acceso.')
          }
        } else {
          console.log(error)
          setErrorMessage('Error al obtener el usuario.'); //Si sale por aqui es undefined
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setErrorMessage('Error al iniciar sesión. Alguno de los campos es incorrecto.'); // Mensaje de error en caso de excepción
      }
  }


  return (
    <>
    <header className="header-section">
      <h1>Bienvenido a EVENT APP</h1>
    </header>
      

      <div className="auth-form-container">
      
      <h2 className="login-txt">Login</h2>
        <form
          className="authform"
          id='login'
          onSubmit={handleSubmit}
        >
          <input  type="text" 
                  name='email' 
                  id='email' 
                  placeholder="Email" 
                  className="inputform" 
                  value={formData.email}
                  onChange={(ev) => setFormData({ ...formData, email: ev.target.value })}/>

          <input  type="password" 
                  name='password' 
                  id='password' 
                  placeholder="Contraseña" 
                  className="inputform" 
                  value={formData.password}
                  onChange={(ev) => setFormData({ ...formData, password: ev.target.value })}/>

          <button className="btn btn-small bg-dark" type='submit'>Login</button>
        </form>

        {/* Mostrar el mensaje de error si existe */}
        {errorMessage && <div className="error-txt">{errorMessage}</div>}
      </div>
    </>
  )

}
