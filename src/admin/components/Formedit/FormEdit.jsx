import React from 'react'

export const FormEdit = ({name, description, year, start_date, end_date, phase, type, enterprise, chief}) => {

  return (
    <div className="box">
        <form className="eventform">
            <input  type="text" 
                    id="name"  
                    name="name" 
                    placeholder="Nombre del evento" 
                    className="inputform"
                    required
                    defaultValue={name}/>
                    
            <input  type="text" 
                    id="description" 
                    name="description" 
                    placeholder="Descripción del evento" 
                    className="inputform"
                    required
                    value={description}/>

            <label htmlFor="year">Evento contratado en:</label>
            <input  type="date" 
                    id="year" 
                    name="year" 
                    className="inputform"
                    required/>

            <label htmlFor="start_date">Evento comienza en:</label>
            <input  type="date" 
                    id="start_date" 
                    name="start_date" 
                    className="inputform"
                    required
                    value={start_date}/>

            <label htmlFor="end_date">Evento finaliza en:</label>
            <input  type="date" 
                    id="end_date" 
                    name="end_date" 
                    className="inputform"
                    required={end_date}/>

            <label htmlFor="phase">Fase del evento:</label>
            <select name="phase" id="phase" className="inputform" required value={phase}>
                <option value="1">Notificación evento</option>
                <option value="2">Búsqueda equipo técnico</option>
                <option value="3">Preparación material</option>
                <option value="4">Montaje</option>
                <option value="5">Directo</option>
                <option value="6">Desmontaje</option>
            </select>

            <label htmlFor="phase">Tipo de evento:</label>
            <select name="type" id="type" className="inputform" required value={type}>
            <option value="1">Festival</option>
            <option value="2">Concierto</option>
            <option value="3">Musical</option>
            <option value="4">Obra de teatro</option>
            <option value="5">Corporativo</option>
            <option value="6">Grabacion</option>
            </select>
            

            <input  type="text" 
                    id="enterprise" 
                    name="enterprise" 
                    placeholder="Empresa organizadora" 
                    className="inputform"
                    required
                    value={enterprise}/>

            <select name="chief" id="chief" className="inputform" required value={chief}>
            <option value="chief1">Lider de equipo 1</option>
            <option value="chief2">Lider de equipo 2</option>
            <option value="chief3">Lider de equipo 3</option>
            </select>

            <button className="button" type='submit'>Editar evento</button>
        </form>
    </div>
  )
}
