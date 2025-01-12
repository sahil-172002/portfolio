import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";

import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/About/Skills.jsx";
import Qualification from "./components/About/Qualification.jsx";
import PersonalInfo from "./components/About/PersonalInfo.jsx";

import 'aos/dist/aos.css'
import 'remixicon/fonts/remixicon.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />

//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="/about/personal" element={<PersonalInfo />} />
        <Route path="/about/qualification" element={<Qualification />} />
        <Route path="/about/skills" element={<Skills />} />
      </Route>
      <Route path="/projects" element={<Projects />} />
    
      <Route path="/contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
