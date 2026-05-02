import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'projects', element: <ProjectsPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)

export default router
