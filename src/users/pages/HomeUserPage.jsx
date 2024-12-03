import { NavLink } from "react-router-dom";

export const HomeUserPage = () => {
  return (
    <>
    <header className="header-section">
      <h1>Home page usuario</h1>

    </header>

      <div className="navegacion flex">
        <button className="btn bg-dark">
            <NavLink 
            to='/'>
              Mis eventos</NavLink>
        </button>

        <button className="btn bg-dark"> 
          <NavLink
          to='/'> 
            Mi perfil
          </NavLink> </button>
      </div>
    </>
  )
}
