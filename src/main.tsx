import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.tsx'
import Contact from './routes/Contact.tsx'
import ErrorPage from './essentials/Error.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "people/:peopleId",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
