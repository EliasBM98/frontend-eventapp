import { NavLink } from "react-router-dom"
import { UserGrid } from "./UserGrid"

export const AllUsersPage = () => {
  return (
    <>
    <header className="header-section">
      <h1 className="h1">Todos los usuarios</h1>
    </header>
    
    <div className="navegacion flex">
    <button className="btn bg-dark">
              <NavLink
                to='/admin'>
                    Home Admin
              </NavLink>
          </button>

          <button className="btn bg-dark">
          <NavLink 
            to='/registeruser'>
              Crear Usuario
          </NavLink>
        </button>
    </div>

    <section>
      <UserGrid/>
    </section>
    </>
  )
}
