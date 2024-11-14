import { apiRest } from "../api/apiRest"

export const getEvents = async (search) => {
    if (!search) return

    const url = `${import.meta.env.VITE_URL_BASE}search?query=${search}`

    const {proyects} = await apiRest(url);

    const events = proyects.map((event)=>({
        id: event.id,
        name: event.name,
        description: event.description,
        year: event.year,
        start_date: event.start_date,
        end_date: event.end_date,
        event_phase: event.event_phase,
        event_type: event.event_type,
        enterprise: event.enterprise,
        chief: event.chief
    }))

  return events

}
