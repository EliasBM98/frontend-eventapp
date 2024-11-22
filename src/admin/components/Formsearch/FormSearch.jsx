
import { useForm } from "../../../hooks/useForm"
import { useFetch } from "../../../hooks/useFetch";

export const FormSearch = ({onNewEvent}) => {

    const {form, handlerChange} = useForm();
    const {getData} = useFetch();

/**
 * Funcion de consulta 
 * 
 * @param {*} ev 
 */
    const searchOnSubmit = async (ev) => {
      ev.preventDefault();
      try {
        const url = `${import.meta.env.VITE_URL_BASE}/eventsname/${form.name}`;
        const resp = await getData(url, 'GET');
        if(resp.ok){
          console.log('Evento encontrado');
          onNewEvent(resp);
        } else {
          console.log('Error al bucar el evento');
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
    <div className="container">
      <div className="box1">
        <form
        onSubmit={searchOnSubmit}
        className="box2">
            <button className="button" type='submit'>Buscar evento</button>
            
            <input type="text" name='name' id='name' placeholder="Nombre del evento" value={form.name} className="inputform" onChange={handlerChange}/>
        </form>
      </div>
    </div>
    </>
  )
}
