import { formatDate } from "../../../utils/dateUtils"

export const EventCard = ({name, description, year, start_date, end_date, phase, type, enterprise, chief}) => {

  const dateFormatYear = formatDate(year);
  const dateFormatStart = formatDate(start_date);
  const dateFormatEnd = formatDate(end_date)
 
  return (
    <article className="card">
            <p>Descripcción: <span>{description}</span></p>
            <p>Contratado en: <span>{dateFormatYear}</span></p>
            <p>Comienza en: <span>{dateFormatStart}</span></p>
            <p>Termina en: <span>{dateFormatEnd}</span></p>
            <p>En fase de: <span>{phase}</span></p>
            <p>Evento de tipo: <span>{type}</span></p>
            <p>Empresa que contrata: <span>{enterprise}</span></p>
            <p>Lider del equipo: <span>{chief}</span></p>
    </article>
  )
}
