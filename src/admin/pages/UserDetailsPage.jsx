import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { UserCard } from "../components/UserCard/UserCard";

export const UserDetailsPage = () => {
    const {id} = useParams();
    const url = `${import.meta.env.VITE_URL_BASE_AUTH}/usersid/${id}`;
    const {events, error, isLoading, getData} = useFetch(url);
    const {data, msg} = events;
    console.log(data)
    const navigate = useNavigate();


  return (
    <>
    <header className="header-section">
      <h1>Detalles del usuario</h1>
    {
      isLoading
      ?
      <p>Cargando...</p>
      :
      <p className="msg-delete card botonera-delete"><span>{data.name} {data.surname}</span></p>
    }
    </header>

    <section>
      {
      error
      ?
      <p>{msg}</p>
      :
      <UserCard key={events.id} {...data}/>   
      }


<div className="card botonera-delete flex">
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
