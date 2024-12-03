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
    <header className="header-section">
      <h1 className="h1">Todos los eventos</h1>
    </header>
    
    <div className="navegacion flex">
    <button className="btn bg-dark">
              <NavLink
                to='/admin'>
                    Home Admin
              </NavLink>
          </button>

          <button className="btn bg-dark">
          <NavLink 
            to='/newevent'>
              Crear evento
          </NavLink>
        </button>

        {/*
          <FormSearch onNewEvent={onNewEvent}/>
        */}
    </div>

    <section>
      {
      <EventGrid/>
      }
    </section>
    </>
  )
}