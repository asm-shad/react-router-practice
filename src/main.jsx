import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import GitHub, { githubInfoLoader } from "./components/GitHub/GitHub.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     children: [
//       {
//         path: "",
//         element: <Home></Home>,
//       },
//       {
//         path: "about",
//         element: <About></About>,
//       },
//       {
//         path: "contact",
//         element: <Contact></Contact>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="user/:userid" element={<User></User>}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<GitHub></GitHub>}
      ></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
