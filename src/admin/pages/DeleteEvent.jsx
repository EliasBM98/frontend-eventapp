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
        console.log ('Error al borrar el evento')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <h1 className="h1">Eliminar evento</h1>
    <h2 className="h2">Estas seguro de que quieres eliminar el siguiente evento:</h2>
    
    {
        isLoading && <p>Cargando...</p>
    }

    <section>
    {
      error
      ?
      <p>{msg}</p>
      :
      <EventCard key={events.id} {...data}/>   
      }

    </section>

    <section className="box">
      <div>

        <button className="deletebutton"
                onClick={deleteOnClick}>
              Confirmar borrar
        </button>

        <button className="button">
        <Link 
            to='/allevents'>
              Cancelar</Link>
        </button>

      </div>
    </section>
    
    </>

  )
}
