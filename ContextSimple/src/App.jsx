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

function ComponenteFilho(){

  return <div>Filho</div>
}

function ComponeteNeto(){
  return <div>Neto</div>
}

export default App
