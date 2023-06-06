import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const contextExemplo = createContext();

function App() {
  const [nome, setNome] = useState('Gabriel')
  const [sobreNome, setSobreNome] = useState('Moretti')

  return (
    <>
    <contextExemplo.Provider value={{nome, sobreNome, setNome}}>
      <ComponenteFilho/>
    </contextExemplo.Provider>    
    </>
  )
}

function ComponenteFilho(){

  const {setNome} = useContext(contextExemplo)

  setNome('João')

  return <ComponenteNeto/>
}

function ComponenteNeto(props){

  const {nome, sobreNome} = useContext(contextExemplo);

  return <h1>O nome da pessoa é {nome} {sobreNome}</h1>
}

export default App
