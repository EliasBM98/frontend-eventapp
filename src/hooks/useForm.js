import { useState } from "react"

export const useForm = () => {
    const [form, setForm] = useState({});


    const serializeForm = (form) =>{
        const formData = new FormData(form)

        const data = {}

        for(let [name, value] of formData){
            data[name]=value
        }
        return data
    };


    const handlerSubmit = (ev) => {
        ev.preventDefault();

        console.log(ev.target)
        const data = serializeForm(ev.target)

        setForm(data)
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

