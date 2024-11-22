import {Navigate, Route, Routes} from "react-router-dom"
import {CompletedPage, HomePage, LoginPage, MyEventsPage} from "../publicViews/pages"
import {AllEventsPage, DeleteEvent, EditEvent, EventDetailsPage, NewEvent, ProtectedPage} from "../admin/pages"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const AppRouters = () => {
  const {isAuthenticated} = useContext(UserContext)
  return (
    <Routes>
    {/*Rutas publicas*/}
    <Route path='/' element={<LoginPage/>} />


    {/*Rutas Protegidas*/}
    {
      isAuthenticated
      ?
      <>
      {/*Rutas protegidas para el admin*/}
        <Route path='admin' element={<ProtectedPage/>} />
        <Route path='allevents' element={<AllEventsPage/>} />
        <Route path='newevent' element={<NewEvent/>} />
        <Route path='editevent/:id' element={<EditEvent/>} />
        <Route path='deleteevent/:id' element={<DeleteEvent/>} />
        <Route path='eventdetails/:id' element={<EventDetailsPage/>} />

      {/*Rutas protegidas para el user*/}
        <Route path='home' element={<HomePage/>} />
        <Route path='myevents' element={<MyEventsPage/>} />
        <Route path='completed' element={<CompletedPage/>} />
      </>
      :
      <>
          {/*Cualquier ruta alternativa que no sea de nuestra app*/}
          <Route path='/*' element={<Navigate to={'/'}/>} />
      </>
    }
  </Routes>
  )
}