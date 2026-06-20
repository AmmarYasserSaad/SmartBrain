import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './containers/App.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "signin",
    element: <SignIn />
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
