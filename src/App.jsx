import { AppRouters } from './routers/AppRouters';
import { UserProvider } from './context/UserContext'
import { NavBarSelector } from './ui/components/NavBarSelector';


function App() {
  return (
    <>
      <UserProvider>
      <header className='header bg-dark flex'>
          <p>Event APP</p>
      </header>

        <NavBarSelector/>
      
      <main className='container main'>
        <AppRouters/>
      </main>

      <footer className='footer bg-dark'>
        <p>Event app.© Todos los derecho reservados.</p>
      </footer>
    </UserProvider>
    </>
  )
};

export default App
