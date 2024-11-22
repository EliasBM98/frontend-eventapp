import { NavLink } from "react-router-dom";
import { EventGrid } from "./EventGrid";

import { useState } from "react";
import { FormSearch } from "../components/Formsearch/FormSearch";
import { EventCard } from "../components/EventCard/EventCard";


export const AllEventsPage = () => {
  const [events, setEvents] =useState([]); 

  const onNewEvent = (newEvent)=>{
    
    setEvents([newEvent, ...events])

  const data = events[0]

    console.log(data)
  };

  return (
    <>
    <h1 className="h1">Todos los eventos</h1>

    <div className="container">
      <div className="box1">
          <button className="button">
              <NavLink
                to='/admin'>
                    Home Admin
              </NavLink>
          </button>

          <button className="button">
          <NavLink 
            to='/newevent'>
              Crear evento
          </NavLink>
        </button>
      </div>
    </div>

    <section>
      {
          <FormSearch onNewEvent={onNewEvent}/>
      }
    </section>

    <section>
      {
      <EventGrid/>
      }
    </section>
    </>
  )
}