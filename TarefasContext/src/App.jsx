import { useContext } from 'react'
import './App.css'
import Header from './componentes/Header'
import { ThemeContext } from './contexts/ThemeContext'

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <main  className={`${ theme !== 'DARK' ? 'DARK' : '' }`}>
      <Header />
    </main>
  )
}

export default App
