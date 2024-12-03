import { Link, useNavigate, useParams} from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { UserCard } from "../components/UserCard/UserCard";


export const DeleteUserPage = () => {
const {id} = useParams();
const url1 = `${import.meta.env.VITE_URL_BASE_AUTH}/usersid/${id}`;
const {events, error, isLoading, getData} = useFetch(url1);
const {data, msg} = events;
console.log(data)
const navigate = useNavigate();


const deleteOnClick = async (ev) => {
    ev.preventDefault();
    try {
      const url2 = `${import.meta.env.VITE_URL_BASE_AUTH}/deleteuser/${id}`;
      const resp = await getData(url2, 'DELETE');
      if(resp.ok){
        console.log(resp, 'Usuario eliminado');
        navigate('/allusers')
      } else {
        console.log ('Error al eliminar el usuario')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
<>
    <header className="header-section">
      <h1>Eliminar usuario</h1>
    </header>

    {
        isLoading && <p>Cargando...</p>
    }

    <section>
    {
        isLoading
        ?
        <p>Cargando...</p>
        :
        <p className="msg-delete card botonera-delete">Estas seguro de que quieres eliminar el usuario <br /><span>{data.name}</span></p>
      }
    {
      error
      ?
      <p>{msg}</p>
      :
          <UserCard key={events.id} {...data}/>   
      }

      <div className="card botonera-delete flex">
        <button className="btn bg-dark btn-small btn-table btn-delete"
                onClick={deleteOnClick}>
              Confirmar borrar
        </button>

        <button className="btn bg-dark btn-small btn-table">
        <Link 
            to='/allusers'>
              Cancelar</Link>
        </button>
      </div>
    </section>
    
    </>
  )
}
