import { useState } from "react"
import { useFetch } from "./useFetch";

export const useForm = () => {
    const [form, setForm] = useState({});
    const {events, error, isLoading, getData} = useFetch()

    const serializeForm = (form) =>{
        const formData = new FormData(form)
        // console.log(formData)
        const data = {}
        for(let [name, value] of formData){
            data[name]=value
        }
        return data
    };

/**
 * Función para setear method y body
 * 
 * @param {Event} ev - Evento submit
 * @return {Function} - Función getData seteando el método de la consulta y el body con la información
 *  
 */
    const handlerSubmit = async (ev) => {
        ev.preventDefault();
        console.log(ev.target)
        const data = serializeForm(ev.target)
        setForm(data)
        try {
            await getData(method, form)
        } catch (error) {
            console.log(error)
            throw error;
        }
    };


    const handlerChange = ({target}) => {
        const {name, value} = target

        setForm({
            ...form,
            [name]: value
        })
    };


  return {
        handlerSubmit,
        handlerChange,
        form
        
    }
}

