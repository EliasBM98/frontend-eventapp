import { useEffect, useState } from "react"
import { apiRest } from "../api/apiRest"

/**
 * Funcion para hacer consultas a la api a través de apiRest, además la vamos a utilizar para definir los estados events, isLoading y Error en función de si se cumple la promesa.
 * 
 * @param {String} url - Url base que normalmente se pasará con un endpoint según convenga.
 * @param {Object} method - método con el que se va a hacer la consulta ('GET', 'DELETE', 'POST', 'PUT')
 * @param {Object} body - pasado en 'POST' 'PUT' será la información que se envía a la bbdd
 * @returns {Promise} - Promesa cumplida si se realiza la consulta o error si falla
 */
export const useFetch = (url, method={}, body={}) => {
  
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState(null);

    const getData = async (customurl = url, custommethod = method, custombody = body) => {
      try {
        // console.log(url, method, body)
        const events = await apiRest(customurl, custommethod, custombody);
        // console.log(events);
          setEvents(events);
          setIsLoading(false);
          setError(null);
        return events;

      } catch (error) {
        //console.log(error);
        setError(error);
        throw error;
      }
    }

    useEffect(()=>{
      {
        getData();
      }
    }, [])

  return {
    events,
    isLoading,
    error,
    getData
  }
}
