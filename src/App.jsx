import './App.css';
import NavBar from "./composant/navBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./page/mainPage/mainPage.jsx";
import FisrtPage from "./composant/fisrtPage.jsx";
import WhoAmI from "./composant/whoAmI.jsx";
import Stack from "./composant/project/stack.jsx";
import CardProject from "./composant/project/cardProject.jsx";
import Assemblage from "./composant/project/assemblage.jsx";
import Gallery from "./composant/inspiration/gallery.jsx";
import AssemblageGallery from "./composant/inspiration/assemblage.jsx";

const router = createBrowserRouter([
  {
    path: '/navBar',
    element: <div><NavBar /></div>
  },
  {
    path: '/my-portfolio',
    element: <div><MainPage /></div>
  },
  {
    path: '/firstPage',
    element: <div><FisrtPage /></div>
  },
  {
    path: '/whoAmI',
    element: <div><WhoAmI /></div>
  },
  {
    path: '/stack',
    element: <div><Stack /></div>
  },
  {
    path: '/card',
    element: <div><CardProject /></div>
  },
  {
    path: '/assemblage',
    element: <div><Assemblage /></div>
  },
  {
    path: '/galery',
    element: <div><Gallery /></div>
  },
  {
    path: '/assemblageGallery',
    element: <div><AssemblageGallery /></div>
  },





]);

function App() {
  return <RouterProvider router={router} />
}

export default App;