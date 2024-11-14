import { useEffect, useState } from "react"
import { getEvents } from "../helpers/getEvents"

export const useFetch = (search) => {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const events = await getEvents(search)
        setEvents(events)
        setIsLoading(false)
    }

    useEffect(()=>{
        getEvents()
    }, [])

  return (
    events,
    isLoading
  )
}
