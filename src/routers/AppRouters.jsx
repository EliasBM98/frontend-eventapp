import {Navigate, Route, Routes} from "react-router-dom"
import {CompletedPage, HomePage, LoginPage, MyEventsPage} from "../publicViews/pages"
import {AllEventsPage, AllUsersPage, DeleteEvent, DeleteUserPage, EditEvent, EditUserPage, EventDetailsPage, NewEvent, ProtectedPage, RegisterUsersPage, UserDetailsPage} from "../admin/pages"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { HomeUserPage } from "../users/pages/HomeUserPage"

export const AppRouters = () => {
  const {isAuthenticated} = useContext(UserContext)
  return (
    <>
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
        <Route path='registeruser' element={<RegisterUsersPage/>} />
        <Route path='allusers' element={<AllUsersPage/>} />
        <Route path='userdetails/:id' element={<UserDetailsPage/>} />
        <Route path='deleteuser/:id' element={<DeleteUserPage/>} />
        <Route path='edituser/:id' element={<EditUserPage/>} />

      {/*Rutas protegidas para el user*/}
        <Route path='user' element={<HomeUserPage/>} />


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
  </>
  )
}