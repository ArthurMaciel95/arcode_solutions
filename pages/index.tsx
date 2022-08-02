import type { NextPage } from 'next';
import Head from 'next/head';
import AboutUs from '../components/about_us';
import Contact from '../components/contact';
import CookieBar from '../components/cookie';
import Fqa from '../components/faq';
import Footer from '../components/footer';
import Hero from '../components/hero';
import SimpleBackdrop from '../components/loading_backdrop';
import ModalCustom from '../components/modal';
import Navbar from '../components/navbar';
import Portifolio from '../components/portifolio';
import Services from '../components/services';
import { AppContextProvider } from '../contexts/AppContext';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARCODE - Soluções Web para seu negócio.</title>
      </Head>
      <AppContextProvider>
        <CookieBar />
        <SimpleBackdrop />
        <ModalCustom />
        <Navbar />
        <Hero />
        <AboutUs />
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
