import CasesList from "components/cases/CasesList";
import Header from "components/cases/Header";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Cases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Hawk | Case Studies</title>
        <meta
          name="description"
          content="Software and Digital Market Agency."
        ></meta>
        <meta
          name="keywords"
          content="softtware agency, marketing agency, web development"
        ></meta>
        <meta name="robots" content="all"></meta>
        <link rel="canonical" href="https://www.Hhwk.com"></link>
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
      <Navbar />
      <div className="pt-28">
        <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but fell free to try other max-widths based on your needs  */}
          <div className="mx-auto max-w-1700">
            <Header />
            <CasesList />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
export default Cases;
