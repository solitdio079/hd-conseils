import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/homePage'
import Root from './root.jsx'
import ErrorPage from './error-page.jsx'
import Team from './routes/team.jsx'
import Honoraries from './routes/honoraries.jsx'
import Contact from './routes/contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/team',
        element: <Team />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/honoraries',
        element: <Honoraries />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contact',
        element: <Contact/> ,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
