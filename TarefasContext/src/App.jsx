import { useContext } from 'react'
import './App.css'
import Header from './componentes/Header'
import { ThemeContext } from './contexts/ThemeContext'
import useThemeContext from './hooks/useThemeContext'

function App() {

  const {theme} = useThemeContext()

  return (
    <main  className={`${ theme !== 'DARK' ? 'DARK' : '' }`}>
      <Header />
    </main>
  )
}

export default App
