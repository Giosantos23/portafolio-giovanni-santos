import {Routes,Route} from "react-router-dom"; 
import About from '../pages/about'
import Home from '../pages/home'
import Proyects from '../pages/proyects'
import Nav from "../components/nav";

export const AppRouter = () => {
    return (
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='proyects' element={<Proyects />} />
          <Route path='about' element={<About />} />
        </Routes>
      </>
    );
  };


