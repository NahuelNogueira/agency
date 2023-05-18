import {BrowserRouter as Router} from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedRoutes from "Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hawk | Software Agency</title>
        <meta
          name="description"
          content="Software and Digital Market Agency."
        ></meta>
        <meta
          name="keywords"
          content="softtware agency, marketing agency, web development"
        ></meta>
        <meta name="robots" content="all"></meta>
        <link rel="canonical" href="https://www.hawk.com"></link>
        <meta name="author" content="Hawk" />
        <meta name="publisher" content="Hawk" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Hawk | Software Agency" />
        <meta
          property="og:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta property="og:url" content="https://www.hawk.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Hawk | Software Agency" />
        <meta
          name="twitter:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
