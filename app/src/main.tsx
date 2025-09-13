import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { pexelsApi } from "./redux/api/pexelsApi.ts";
import { ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import About from "./views/About.tsx";
import Contact from "./views/Contact.tsx";
import Home from "./views/Home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={pexelsApi}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </ApiProvider>
  </StrictMode>
);
