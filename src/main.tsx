import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home.tsx'
import Contact from './routes/Contact.tsx'
import ErrorPage from './components/blocks/Error.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AddContact from './routes/AddContact.tsx'
import EditContact from './routes/EditContact.tsx'

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
  {
    path: "people/add",
    element: <AddContact />,
  },
  {
    path: "people/edit/:peopleId",
    element: <EditContact />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
},)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
