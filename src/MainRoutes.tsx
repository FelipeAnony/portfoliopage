import { useRoutes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Cv from "./pages/Cv";
import Home from "./pages/Home/home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

function MainRoutes() {
  return useRoutes([
    {path:'*', element: <NotFound/>},
    {path:'/', element: <Home/>},
    {path:'/cv', element: <Cv/>},
    {path:'/projects', element: <Projects/>},
    {path: '/contact', element: <ContactForm/>}
  ]);
}

export default MainRoutes;