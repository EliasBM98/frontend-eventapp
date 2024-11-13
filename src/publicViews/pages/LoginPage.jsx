import {useContext} from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

  const {mensaje, user, setUser, isAuthenticated, login} = useContext(UserContext);
  const navigate = useNavigate()

  const handlerSubmit = (ev) => {
    ev.preventDefault()

    const nombre = ev.target.name.value.trim();
    const password = ev.target.password.value.trim();


    const logeredUser = {id:1, nombre, password}
    console.log(logeredUser)

    setUser(logeredUser);
    login();
    navigate('/admin')
      
  }


  return (
    <>
      <h1 className="h1">Login</h1>
      <h2 className="h2">Bienvenido a EVENT APP</h2>
      <p className="logintxt">Para continuar debes introducir tus datos</p>

      <h2>{mensaje}</h2>



      <code><pre>{JSON.stringify(user, null, 1)}</pre></code>

      <div className="box">
        <form
          className="loginform"
          id='login'
          onSubmit={handlerSubmit}
        >
          <input type="text" name='name' id='name' placeholder="Usuario" className="inputform"/>

          <input type="text" name='password' id='password' placeholder="Contraseña" className="inputform"/>

          <button className="button" type='submit'>Login</button>
        </form>
      </div>
    </>
  )

}
