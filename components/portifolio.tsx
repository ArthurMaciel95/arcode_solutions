import styles from '../styles/portifolio.module.css';
import CardPortifolio from './card_portifolio';

const Portifolio = () => {
  return (
    <section className={styles.portifolio} id="portfolio">
      <h2>PORTIFÓLIO</h2>
      <div className={styles.cardArea}>
        <CardPortifolio
          imageUrl=""
          title="Link-share"
          description="plataforma para armagenamento de links de outras plataformas, com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url=""
        />
        <CardPortifolio
          imageUrl=""
          title="SOS Passagens Aereas"
          description="plataforma para armagenamento de links de outras plataformas, com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url=""
        />
        <CardPortifolio
          imageUrl=""
          title="Universo Turismo"
          description="plataforma para armagenamento de links de outras plataformas, com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url=""
        />
      </div>
    </section>
  );
};

export default Portifolio;
