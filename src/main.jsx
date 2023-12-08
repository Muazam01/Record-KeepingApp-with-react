import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.module.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom' 
import Login from './components/login.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  
)
