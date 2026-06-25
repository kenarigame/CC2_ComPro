import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Service';
import ArticlesSection from './components/sections/Articles';

import Login from './pages/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
   {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blog",
    element: <ArticlesSection />,
  },
  // {
  //   path: "/teams",
  //   element: <TeamCard />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
