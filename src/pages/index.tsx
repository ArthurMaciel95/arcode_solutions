import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Contact from "components/contact";
import CookieBar from "components/cookie";
import Fqa from "components/faq";
import Footer from "components/footer";
import Hero from "components/hero";
import SimpleBackdrop from "components/loading_backdrop";
import ModalCustom from "components/modal-custom";
import Navbar from "components/navbar";
import Portifolio from "components/portifolio";
import AboutUs from "components/about-us";
import Services from "components/services";
import { AppContextProvider } from "contexts/AppContext";
import DialogCustom from "components/modal-custom/modal-configuration-cookie/indexs";
import Offer from "components/offer";
import "animate.css/animate.min.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Posts from "components/posts";
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
        <CookieBar />
        <SimpleBackdrop />
        <DialogCustom />
        <ModalCustom />
        <Navbar />
        <Hero />
        {/*  <Posts /> */}
        <Portifolio />
        <AboutUs />
        <Services />
        <Offer />
        <Contact />
        <Fqa />
        <Footer />
      </AppContextProvider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"]))
    }
  };
};

export default Home;
