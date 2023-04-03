import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Contact from "containers/pages/Contact";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Careers from "containers/pages/Careers";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/*Error Display*/}
        <Route path="*" element={<Error404 />} />

        {/* Home Display */}
        <Route path="/" element={<Home />} />
        <Route path="/casos" element={<Cases />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/carreras" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
