import { Button } from '@mui/material';
import styles from '../styles/hero.module.css';

import ButtonWhatsapp from './button_whatsapp';

const Hero = () => {
  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1>PRECISANDO DE UM SITE PARA SEU NEGÓCIO?</h1>
        <p>
          COM A ARCODE VOCÊ PODE FATURAR MAIS NA FIDELIZAÇÃO DOS SEUS CLIENTES.
        </p>
        <ButtonWhatsapp />
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
