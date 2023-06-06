import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const contextExemplo = createContext();

function App() {
  const [nome, setNome] = useState('Gabriel')
  const [sobreNome, setSobreNome] = useState('Moretti')
  const [idade, setIdade] = useState('50')

  return (
    <>
    <contextExemplo.Provider value={{nome, sobreNome, setNome, idade}}>
      <ComponenteFilho/>
    </contextExemplo.Provider>    

    <componenteTataraneto/>
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

  return (
    <div>
        <h1>O nome da pessoa é {nome} {sobreNome}</h1>
        <ComponenteBisNeto/>
    </div>
  )
}

function ComponenteBisNeto(){

  const {idade} = useContext(contextExemplo);

  return <h2>A idade é {idade}</h2>

}

export default App;