import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './assets/routes/App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Portfolio from './components/Portfolio.jsx';
import CustomCursor from './components/CustomeCursor.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path:"/my-portfolio/", index: true, element: <Portfolio /> }, 
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomCursor/>
    <RouterProvider router = {router}/>
    
  </StrictMode>,
)
