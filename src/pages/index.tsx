import type { NextPage } from "next";
import Head from "next/head";
import { GlobalStyles } from "styles/globals";
import AboutUs from "components/about-us";
import Contact from "components/contact";
import CookieBar from "components/cookie";
import Fqa from "components/faq";
import Footer from "components/footer";
import Hero from "components/hero";
import SimpleBackdrop from "components/loading_backdrop";
import ModalCustom from "components/modal-custom";
import Navbar from "components/navbar";
import Portifolio from "components/portifolio";
import Posts from "components/posts";
import Services from "components/services";
import { AppContextProvider } from "contexts/AppContext";
import DialogCustom from "components/modal-custom/modal-configuration-cookie/indexs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARCODE - Soluções Web para seu negócio.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
      </Head>
      <AppContextProvider>
        <GlobalStyles />
        <CookieBar />
        <SimpleBackdrop />
        <DialogCustom />
        <ModalCustom />
        <Navbar />
        <Hero />
        <AboutUs />
        <Posts />
        <Portifolio />
        <Services />
        <Contact />
        <Fqa />
        <Footer />
      </AppContextProvider>
    </>
  );
};

export default Home;
