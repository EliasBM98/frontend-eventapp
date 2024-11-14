import { Route, Routes, Navigate } from 'react-router-dom';

import { AppRouters } from './routers/AppRouters';
import { UserProvider } from './context/UserContext'
import { NavBarSelector } from './ui/components/NavBarSelector';


function App() {
  return (
    <>
      <UserProvider>
      <header>
        Event APP
      </header>

      <nav>
        <NavBarSelector/>
      </nav>
      
      <main>
        <AppRouters/>
      </main>

      <footer className='footer'>
        Este es el Footer
      </footer>
    </UserProvider>
    </>
  )
};

export default App
