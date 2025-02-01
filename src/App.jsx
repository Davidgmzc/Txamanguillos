import './App.css'
import { Formulario } from './Componentes/Formulario'
import { Home } from './Componentes/Home'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState([])

  return (
    <>
      <div className='App'>
        {
          !user.length > 0 
          ? <Formulario setUser={setUser}/>
          : <Home user={user} setUser={setUser} />
        }
      </div>

    </>
  )
}

export default App
