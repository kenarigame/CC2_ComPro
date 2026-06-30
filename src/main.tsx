import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ContactSection from "./components/sections/Contact";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Services from "./pages/Service";

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
  // {
  //   path: "/blogs/:objectId",
  //   element: <BlogDetail />,
  // },
  {
    path: "/createblog",
    element: <CreateBlog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <ContactSection />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
