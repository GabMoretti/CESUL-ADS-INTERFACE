import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function App() {

  return (
    <>

      <Outlet />
      <Navigate to='/prova_Tela_1' />
    </>
  )
}

export default App
