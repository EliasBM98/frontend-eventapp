import { Link, useNavigate, useParams} from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { EventCard } from "../components/EventCard/EventCard";

export const DeleteEvent = () => {
  const {id} = useParams();
  const url1 = `${import.meta.env.VITE_URL_BASE}/eventsid/${id}`;
  const {events, error, isLoading, getData} = useFetch(url1);
  const {data, msg} = events;
  console.log(data)
  const navigate = useNavigate();


  const deleteOnClick = async (ev) => {
    ev.preventDefault();
    try {
      const url2 = `${import.meta.env.VITE_URL_BASE}/deleteevent/${id}`;
      const resp = await getData(url2, 'DELETE');
      if(resp.ok){
        console.log(resp, 'Evento eliminado');
        navigate('/allevents')
      } else {
        console.log ('Error al eliminar el evento')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <header className="header-section">
      <h1>Eliminar evento</h1>
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
        <p className="msg-delete card botonera-delete">Estas seguro de que quieres eliminar el evento <br /><span>{data.name}</span></p>
      }
    {
      error
      ?
      <p>{msg}</p>
      :
          <EventCard key={events.id} {...data}/>   
      }

      <div className="card botonera-delete flex">
        <button className="btn bg-dark btn-small btn-table btn-delete"
                onClick={deleteOnClick}>
              Confirmar borrar
        </button>

        <button className="btn bg-dark btn-small btn-table">
        <Link 
            to='/allevents'>
              Cancelar</Link>
        </button>
      </div>
    </section>
    
    </>

  )
}
