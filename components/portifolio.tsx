import styles from '../styles/portifolio.module.css';

const Portifolio = () => {
  return (
    <section className={styles.portifolio}>
      <h2>PORTIFÓLIO</h2>
      <div className={styles.cardArea}>
        <div className={styles.card}>
          <span></span>
          <img src="" alt="" />
          <h4>Link-share</h4>
          <p>
            plataforma para armagenamento de links de outras plataformas, com
            ela você consegue compartilhar com outra pessoa sua plataformas como
            facebook, instagram, tiktok e etc...
          </p>
        </div>
        <div className={styles.card}>
          <span></span>
          <img src="" alt="" />
          <h4>Link-share</h4>
          <p>
            plataforma para armagenamento de links de outras plataformas, com
            ela você consegue compartilhar com outra pessoa sua plataformas como
            facebook, instagram, tiktok e etc...
          </p>
        </div>
        <div className={styles.card}>
          <span></span>
          <img src="" alt="" />
          <h4>Link-share</h4>
          <p>
            plataforma para armagenamento de links de outras plataformas, com
            ela você consegue compartilhar com outra pessoa sua plataformas como
            facebook, instagram, tiktok e etc...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
