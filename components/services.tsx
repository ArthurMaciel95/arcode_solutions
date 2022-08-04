import React from 'react';
import styles from '../styles/services.module.css';
import CardServices from './card_services';

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2>BENEFÍCIOS</h2>
      <div className={styles.cardArea}>
        <CardServices
          imageUrl="/tmp/image/localizacao.png"
          description="Aumente o tamanho do seu mercado!"
        />
        <CardServices
          imageUrl="/tmp/image/metricas_tables.png"
          description="Reduza seus custos de divulgação."
        />
        <CardServices
          imageUrl="/tmp/image/computador_check.png"
          description="Aumente o seu 'léque' de canais para divulgar seu produto.(Site, instagram, facebook)."
        />
        <CardServices
          imageUrl="/tmp/image/metricas.png"
          description="Tenha controle e informações de seus clientes através de metricas do google."
        />
        <CardServices
          imageUrl="/tmp/image/engrenagem.png"
          description="Oferecemos site com Otimo SEO para um melhor ranqueamento nas pesquisas do google."
        />
        <CardServices
          imageUrl="/tmp/image/responsividade.png"
          description="Seu site funcionando em diversos dispositivos."
        />
      </div>
    </section>
  );
};

export default Services;
