import React from "react";
import { Container } from "./styles";
import CardServices from "../service-card";

const Services: React.FC = () => {
  return (
    <Container id="services">
      <h2>BENEFÍCIOS</h2>
      <div className="card-area">
        <CardServices
          imageUrl="/tmp/image/localizacao.png"
          description="Aumente o tamanho do seu mercado!"
          alt="ilustração de uma tela de site com ícone de localização"
        />
        <CardServices
          imageUrl="/tmp/image/metricas_tables.png"
          description="Reduza seus custos de divulgação."
          alt="ilustração de uma tela de site com ícone de metricas"
        />
        <CardServices
          imageUrl="/tmp/image/computador_check.png"
          description="Aumente o seu 'léque' de canais para divulgar seu produto.(Site, instagram, facebook)."
          alt="ilustração de uma tela de seite com um computador"
        />
        <CardServices
          imageUrl="/tmp/image/metricas.png"
          description="Tenha controle e informações de seus. clientes através de metricas do google."
          alt="ilustração de uma tela de site com metricas;"
        />
        <CardServices
          imageUrl="/tmp/image/engrenagem.png"
          description="Oferecemos site com ótimo SEO para um melhor ranqueamento nas pesquisas do google."
          alt="ilustração de engrenagem"
        />
        <CardServices
          imageUrl="/tmp/image/responsividade.png"
          description="Seu site funcionando em diversos dispositivos."
          alt="ilustração mostrando diversos dispositivos mostrando um site."
        />
      </div>
    </Container>
  );
};

export default Services;
