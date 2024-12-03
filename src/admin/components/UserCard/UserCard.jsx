
export const UserCard = ({id, name, surname, email, role, job_position, user_function}) => {
    return (
    <article className="card">
        <p>Identificador: <span>{id}</span></p>
        <p>Nombre: <span>{name}</span></p>
        <p>Apellido: <span>{surname}</span></p>
        <p>Email: <span>{email}</span></p>
        <p>Puesto: <span>{job_position}</span></p>
        <p>Funcion: <span>{user_function}</span></p>
        <p>Rol de su cuenta: <span>{role}</span></p>
    </article>
  )
}
