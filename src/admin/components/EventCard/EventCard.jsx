import { formatDate } from "../../../utils/dateUtils"

export const EventCard = ({name, description, year, start_date, end_date, phase, type, enterprise, chief}) => {

  const dateFormatYear = formatDate(year);
  const dateFormatStart = formatDate(start_date);
  const dateFormatEnd = formatDate(end_date)
 
  return (
<div className="box">
    <article className="card">
        <div className="card-details">
            <h3>Nombre:{name}</h3>
            <p>Descripcción: {description}</p>
            <p>Contratado en: {dateFormatYear}</p>
            <p>Comienza en: {dateFormatStart}</p>
            <p>termina en: {dateFormatEnd}</p>
            <p>En fase de: {phase}</p>
            <p>Evento de tipo: {type}</p>
            <p>Empresa que contrata: {enterprise}</p>
            <p>Lider del equipo: {chief}</p>

        </div>
    </article>
</div>
  )
}
