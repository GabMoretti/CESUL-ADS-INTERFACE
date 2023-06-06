import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState('Gabriel')

  return (
    <>
      <ComponenteFilho nomePessoa={nome}/>
        
    </>
  )
}

function ComponenteFilho(props){
  return <ComponenteNeto nomePessoaNeto={props.nomePessoa}/>
}

function ComponenteNeto(props){
  return <h1>O nome da pessoa é {props.nomePessoaNeto}</h1>
}

export default App
