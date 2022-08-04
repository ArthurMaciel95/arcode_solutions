import styles from '../styles/portifolio.module.css';
import CardPortifolio from './card_portifolio';

const Portifolio = () => {
  return (
    <section className={styles.portifolio} id="portfolio">
      <h2>PORTIFÓLIO</h2>
      <div className={styles.cardArea}>
        <CardPortifolio
          imageUrl="/tmp/image/linksharescreen.png"
          title="Link-share"
          description="plataforma para armazenamento de links , com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url="https://www.linkshare.com.br"
        />
        <CardPortifolio
          imageUrl="/tmp/image/sospassagensareas.png"
          title="SOS Passagens Aereas"
          description="Site para uma empresa de vendas de passagens aereas e outros serviços adicionais, foi criado todo o design do zero e realizamos a otimização do SEO para que tivesse um bom ranqueamento no google."
          url="https://www.sospassagensaereas.com.br"
        />
        <CardPortifolio
          imageUrl="/tmp/image/universoturismo.png"
          title="Universo Turismo"
          description="plataforma que oferece reservas de passagens aereas localizada em Belém, empresa com filiais em diversos estado do brasil esta em constante crescimento."
          url="https://www.universoturismo.com.br"
        />
      </div>
    </section>
  );
};

export default Portifolio;
