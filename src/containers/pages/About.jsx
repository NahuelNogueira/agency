import Clients from "components/about/Clients";
import Header from "components/about/Header";
import Images from "components/about/Images.js";
import LogoCloud from "components/about/LogoCloud";
import Team from "components/about/Team";
import TestStats from "components/about/TestStats";
import Features from "components/Home/Features";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Hawk | About Us</title>
        <meta
          name="description"
          content="Software and Digital Market Agency."
        ></meta>
        <meta
          name="keywords"
          content="softtware agency, marketing agency, web development"
        ></meta>
        <meta name="robots" content="all"></meta>
        <link rel="canonical" href="#"></link>
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
        <Header />
        <TestStats />
        <Images />
        <Clients />
        <LogoCloud/>
        <Features />
        <Team />
        <div className="bg-white">
          <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-cyan-600">
              Join our's newsletter and never miss our updates.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium text-white hover:bg-cyan-700"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
export default About;