import { useFetch } from "../../hooks/useFetch"
import { EventCard } from "./EventCard"

export const EventGrid = ({event}) => {
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

    const {events, isLoading} = useFetch(event)    
  return (
    <>
    {
        isLoading && <p>Cargando...</p>
    }
    
    <section>
        {
        events.map(({id,
                name, 
                description, 
                year, 
                start_date, 
                end_date, 
                event_phase, 
                event_type, 
                enterprise,
                chief})=>(
                    <EventCard key={id} name={name} description={description} year={year} start_date={start_date} end_date={end_date} event_phase={event_phase} event_type={event_type} enterprise={enterprise} chief={chief}/>
                ))
        }
    </section>
    
    </>
  )
}