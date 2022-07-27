import type { NextPage } from 'next';
import Head from 'next/head';
import AboutUs from '../components/about_us';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Portifolio from '../components/portifolio';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARCODE - Soluções Web para seu negócio.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Hero />
      <AboutUs />
      <Portifolio />
    </>
  );
};

export default Home;
