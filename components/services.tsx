import styles from '../styles/services.module.css';
import CardServices from './card_services';

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>BENEFÍCIOS</h2>
      <div className={styles.cardArea}>
        <CardServices
          imageUrl="tmp/image/localizacao.png"
          description="AUMENTE O TAMANHO DO SEU MERCADO"
        />
        <CardServices
          imageUrl="tmp/image/metricas_tables.png"
          description="REDUZ SEUS CUSTOS DE DIVULGAÇÃO"
        />
        <CardServices
          imageUrl="tmp/image/computador_check.png"
          description="AUMENTE SUA DISPONIBILIDADE"
        />
        <CardServices
          imageUrl="tmp/image/metricas.png"
          description="AUMENTE O TAMANHO DO SEU MERCADO"
        />
        <CardServices
          imageUrl="tmp/image/engrenagem.png"
          description="OTIMIZAÇÃO PARA MELHOR RANQUEAMENTO NO GOOGLE."
        />
        <CardServices
          imageUrl="tmp/image/responsividade.png"
          description="SEU SITE FUNCIONANDO EM DIVERSOS DISPOSITIVOS ( Celular, Computador,
          Tablet )"
        />
      </div>
    </section>
  );
};

export default Services;
