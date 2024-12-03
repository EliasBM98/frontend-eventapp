// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons';
import { useFetch } from "../../hooks/useFetch";
import { EventList } from "../components/EventList/EventList";
import {FaBuffer} from "react-icons/fa";


export const EventGrid = () => {
    /*const events =[
        {id: 1,
        name: "Evento 1", 
        description:"Descripcion1", 
        year: "2001/01/01", 
        start_date: "2001/01/01", 
        end_date: "2001/01/01", 
        event_phase: "Fase 1", 
        event_type: "Tipo 1", 
        enterprise: "Empresa 1",
        chief: "Lider de equipo 1"
        },
        {id: 2,
        name: "Evento 2", 
        description:"Descripcion2", 
        year: "2002/02/2", 
        start_date: "2002/02/2", 
        end_date: "2002/02/02", 
        event_phase: "Fase 2", 
        event_type: "Tipo 2", 
        enterprise: "Empresa 2",
        chief: "Lider de equipo 2"
        },
        {id: 3,
        name: "Evento 3", 
        description:"Descripcion3", 
        year: "2003/03/03", 
        start_date: "2003/03/03", 
        end_date: "2003/03/03", 
        event_phase: "Fase 3", 
        event_type: "Tipo 3", 
        enterprise: "Empresa 3",
        chief: "Lider de equipo 3"
        }
      ]*/

    const url=`${import.meta.env.VITE_URL_BASE}/events/0`

    const {events, error, isLoading, setEvents} = useFetch(url);    

    const {ok, data, msg, total_pages} =events;

    // const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
    

  return (
    <>
    <div className="contador-eventos">
      <p className="counter">Eventos activos: {total_pages}</p>
    </div>

    {
      isLoading 
        ?
        <p>Cargando...</p>
        :
        <table className="fulltable">
          <thead>
              <tr>
                  <th>Ref</th>
                  <th>Nombre</th>
                  <th>Empresa</th>
                  <th>Comienza</th>
                  <th><FaBuffer/></th>
              </tr>
            </thead>
            <tbody>
                {
                  error
                  ?
                  <p>{msg}</p>
                  :
                  data?.length>0 && data.map((event) => (<tr className="tablerow" key={event.id}><EventList key={event.id} {...event}/></tr> ))
                }
            </tbody>
        </table>
    }
    </>
  )
}