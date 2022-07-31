import styles from '../styles/portifolio.module.css';
import CardPortifolio from './card_portifolio';

const Portifolio = () => {
  return (
    <section className={styles.portifolio} id="portfolio">
      <h2>PORTIFÓLIO</h2>
      <div className={styles.cardArea}>
        <CardPortifolio
          imageUrl="tmp/image/linksharescreen.png"
          title="Link-share"
          description="plataforma para armagenamento de links de outras plataformas, com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url="https://www.linkshare.com.br"
        />
        <CardPortifolio
          imageUrl="tmp/image/sospassagensareas.png"
          title="SOS Passagens Aereas"
          description="plataforma para armagenamento de links de outras plataformas, com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url="https://www.sospassagensaereas.com.br"
        />
        <CardPortifolio
          imageUrl="tmp/image/universoturismo.png"
          title="Universo Turismo"
          description="plataforma para armagenamento de links de outras plataformas, com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url="https://www.universoturismo.com.br"
        />
      </div>
    </section>
  );
};

export default Portifolio;
