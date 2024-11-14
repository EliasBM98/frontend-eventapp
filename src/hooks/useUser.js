/*Patron adaptador: este hook nos permite preservar la estructua en el resto de componentes en caso de cambie la forma en la que el UserContext recibe la informacion de los usuarios */

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUser = () => {
  return useContext(UserContext)
}
