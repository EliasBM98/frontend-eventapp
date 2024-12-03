import { Navigate } from "react-router-dom";

/**
 * Verifica si el usuario esta autenticado y redirige si no lo está.
 * 
 * @param {*} param0 
 * @returns 
 */
export const ProtectedRoutes = ({children, allowedRoles}) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if(!token){
        return <Navigate to='/'/>;
    }
    if(allowedRoles && !allowedRoles.icludes(userRole)){
        return <Navigate to='/'/>;
    }
    return children;
}
