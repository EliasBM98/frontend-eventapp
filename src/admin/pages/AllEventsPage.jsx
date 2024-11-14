import { NavLink } from "react-router-dom";
import { EventGrid } from "./EventGrid";
import { useState } from "react";
import { FormSearch } from "../components/FormSearch";

import './AllEventsPage.css'
import { NewEvent } from "./NewEvent";



export const AllEventsPage = () => {

    const [events, setEvents] = useState([])

    const onNewEvent = (newEvent) =>{
          const exists = events.find((event)=> event.toLowerCase() == newEvent.toLowerCase())
          if (exists) return

      setEvents([newEvent, ...events])
    }

  return (
    <>
    <h1 className="h1">Todos los eventos</h1>

    <section>
        {
        <FormSearch onNewEvent={onNewEvent}/>
        }
    </section>

    <section>
      {
        events != [] && events.map((event)=>(
          <EventGrid key={event} event={event}/>
        ))
      
      }
    </section>

    <div className="container">
      <div className="box1">
        <button className="button">
              <NavLink
              to='/admin'>
                  Home Admin</NavLink>
      </button>
      </div>
    </div>


    </>
  )
}
