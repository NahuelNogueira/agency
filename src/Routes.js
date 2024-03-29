import {
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
import Category from "containers/pages/Category";
import Search from "containers/pages/Search";
import PostDetail from "containers/pages/PostDetail";
import OptIn from "containers/pages/OptIn";
import Ecommerce from "containers/pages/cases/Ecommerce";
import JavascriptDev from "containers/pages/services/development/JavascriptDev";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/*Error Display*/}
        <Route path="*" element={<Error404 />} />

        {/* Home Display */}
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/ecommerce" element={<Ecommerce />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/javascript" element={<JavascriptDev />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/s=:term" element={<Search />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<OptIn />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
