import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import TelaLogin from './TelaLogin'
import { NomeProvider } from './NomeContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NomeProvider>
      <RouterProvider router={router} />
    </NomeProvider>
  </React.StrictMode>
)
