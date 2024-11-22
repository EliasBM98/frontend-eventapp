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
    <h1 className="h1">Detalles del evento</h1>

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
