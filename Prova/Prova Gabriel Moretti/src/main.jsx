import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { PrincipalProvider } from './hooks/PrincipalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrincipalProvider>
      <RouterProvider router={router} />
    </PrincipalProvider>
  </React.StrictMode>,
)
