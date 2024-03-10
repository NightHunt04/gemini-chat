import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Land from './components/Land.jsx'
import RootChat from './components/Chat/RootChat.jsx'
import About from './components/About/About.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '',
        element : <Land />
      },
      {
        path : '/about',
        element : <About />
      }
    ]
  },
  {
    path : '/chat',
    element : <RootChat />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
