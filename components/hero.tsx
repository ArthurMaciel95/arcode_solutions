import { Button } from '@mui/material';
import styles from '../styles/hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1>PRECISANDO DE UM SITE PARA SEU NEGÓCIO?</h1>
        <p>
          COM A ARCODE VOCÊ PODE FATURAR MAIS NA FIDELIZAÇÃO DOS SEUS CLIENTES.
        </p>
        <Button
          variant="contained"
          disableElevation
          style={{
            backgroundColor: '#2ED105',
            marginRight: '20px',
          }}
          startIcon={
            <Image src="/tmp/svg/whatsapp.svg" width="20" height="20" />
          }
        >
          faça um orçamento
        </Button>
        <Button
          variant="outlined"
          disableElevation
          style={{
            color: 'white',
            border: '1px solid white',
          }}
        >
          VER PORTIFOLIO
        </Button>
      </section>
      <span className={styles.heroArrowDown}>
        <img src="tmp/svg/arrow_down.svg" alt="arrow down hero" />
      </span>
    </main>
  );
};

export default Hero;
