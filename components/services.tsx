import React from 'react';
import styles from '../styles/services.module.css';
import CardServices from './card_services';

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2>BENEFÍCIOS</h2>
      <div className={styles.cardArea}>
        <CardServices
          imageUrl="tmp/image/localizacao.png"
          description="Aumente o tamanho do seu mercado!"
        />
        <CardServices
          imageUrl="tmp/image/metricas_tables.png"
          description="Reduza seus custos de divulgação."
        />
        <CardServices
          imageUrl="tmp/image/computador_check.png"
          description="Aumente sua disponibilidade."
        />
        <CardServices
          imageUrl="tmp/image/metricas.png"
          description="Aumente o tamanho do seu mercado!"
        />
        <CardServices
          imageUrl="tmp/image/engrenagem.png"
          description="Otimização para melhor ranqueamento no google."
        />
        <CardServices
          imageUrl="tmp/image/responsividade.png"
          description="Seu site funcionando em diversos dispositivos."
        />
      </div>
    </section>
  );
};

export default Services;
