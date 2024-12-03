import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { EventCard } from "../components/EventCard/EventCard";


export const EventDetailsPage = () => {
    const {id} = useParams();
    const url1 = `${import.meta.env.VITE_URL_BASE}/eventsid/${id}`;
    const {events, error, isLoading, getData} = useFetch(url1);
    const {data, msg} = events;
    console.log(data)
    const navigate = useNavigate();



  return (
    <>
    <header className="header-section">
      <h1>Detalles del evento</h1>
    {
      isLoading
      ?
      <p>Cargando...</p>
      :
      <p className="msg-delete card botonera-delete"><span>{data.name}</span></p>
    }
    </header>

    <section>
      {
      error
      ?
      <p>{msg}</p>
      :
      <EventCard key={events.id} {...data}/>   
      }


<div className="card botonera-delete flex">
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
