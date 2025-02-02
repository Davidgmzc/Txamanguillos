
import { LogInForm } from './Componentes/Form/LogInForm.jsx'
{/*import { useState } from 'react'*/}
import { Navbar } from './Componentes/Navbar/NavBar.jsx' 
import { Footer } from './Componentes/Footer/Footer.jsx'

function App() {

  {/*const [user, setUser] = useState([])*/}

  return (
    <>
    <div className='navBar'>
      <Navbar />
    </div>
    <div className='form'>
      <LogInForm />
    </div>
    <div className='footer'>
      <Footer />
    </div>
    </>
  )
}

export default App

