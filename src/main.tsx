import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.tsx'
import Contact from './routes/Contact.tsx'
import ErrorPage from './essentials/Error.tsx'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "people/:peopleId",
    element: <Contact />,
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
