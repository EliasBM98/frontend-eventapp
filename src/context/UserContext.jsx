import {Children, createContext, useState} from "react"

/* Exporto el contexto UserContext como Highordercomponent
El contexto nos va a permitir definir un provider que reciba propiedades del context */

export const UserContext = createContext();

/*Exporto el provider que va a almacenar el value del contexto*/

export const UserProvider = ({children}) => {

/*Uso el hook use state para definir el estado de user su valor inicial es un objeto vacio ya que no hay usuario logeado la primera vez que se monta el componente*/

    const [user, setUser] = useState();

/*Utilicimaos otra vez el hook use state para definir el estado de la autenticacion del usuario , inicialmente sera falso y cuando se compruebe que existe en la base de datos pasa a true */
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true); //Cuando se ejecute el estado de autenticado pasa a true

    const logout = () => {
        setIsAuthenticated(false)
        setUser({})
    } //cuando se ejecute el estado de autenticado pasa a falso y el usuario vuelve a ser vacio



    return (
        <UserContext.Provider value={{mensaje1: 'Hola usuario',
                                      mensaje2: 'Hola admin',
                                      user,
                                      setUser,
                                      isAuthenticated,
                                      login,
                                      logout  
        }}>
            {children}
        </UserContext.Provider>
    )
}
