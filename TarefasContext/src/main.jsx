import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cadastrar from './pages/Cadastrar.jsx'
import ListarTarefas from './pages/ListarTarefas.jsx'
import { routerCesul } from './router.jsx'
import { TaskProvider } from './contexts/TaskContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <RouterProvider router={routerCesul} />
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
