import { AppRouters } from './routers/AppRouters';
import { UserProvider } from './context/UserContext'
import { NavBarSelector } from './ui/components/NavBarSelector';


function App() {
  return (
    <>
      <UserProvider>
      <header className='header'>
          <h1 className='h1'>Event APP</h1>
      </header>

      {/* <nav>
        <NavBarSelector/>
      </nav> */}
      
      <main>
        <AppRouters/>
      </main>

      <footer className='footer'>
        <p>Event app.</p>
      </footer>
    </UserProvider>
    </>
  )
};

export default App
