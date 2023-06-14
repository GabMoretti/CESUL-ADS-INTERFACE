import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routerCesul = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/cadastrar", element: <Cadrastrar/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routerCesul}/>
    </ThemeProvider>
  </React.StrictMode>,
)
