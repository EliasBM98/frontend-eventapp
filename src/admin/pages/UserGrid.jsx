import {FaBuffer} from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import {UserList} from "../components/UsersList/UserList"

export const UserGrid = () => {

  const url=`${import.meta.env.VITE_URL_BASE_AUTH}/users`

  const {events, error, isLoading, setEvents} = useFetch(url); 

  const {ok, data, msg, total_pages} =events;


  return (
    <>
    <div className="contador-eventos">
      <p className="counter">Usuarios encontrados: {total_pages}</p>
    </div>

    {
      isLoading 
      ?
      <p>Cargando...</p>
      :

        <table className="fulltable fulltable-centered">
          <thead>
              <tr>
                  <th>Ref</th>
                  <th>Nombre</th>
                  <th>Puesto</th>
                  <th>Función</th>
                  <th><FaBuffer/></th>
              </tr>
            </thead>
            <tbody>
            {
                  error
                  ?
                  <p>{msg}</p>
                  :
                  data?.length>0 && data.map((event) => (<tr className="tablerow" key={event.id}><UserList key={event.id} {...event}/></tr> ))
                }
            </tbody>

        </table>
    }
    </>
  )
}
