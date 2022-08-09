import * as S from "./styles";
import CardPortifolio from "../portifolio-card";

const Portifolio = () => {
  return (
    <S.Container className="portifolio" id="portfolio">
      <h2>PORTIFÓLIO</h2>
      <div className="card-area">
        <CardPortifolio
          imageUrl="/tmp/image/linksharescreen.png"
          title="Link-share"
          description="plataforma para armazenamento de links , com
          ela você consegue compartilhar com outra pessoa sua plataformas como
          facebook, instagram, tiktok e etc..."
          url="https://www.linkshare.com.br"
          alt="imagem contendo uma página de site do dominio linkshare."
        />
        <CardPortifolio
          imageUrl="/tmp/image/sospassagensareas.webp"
          title="SOS Passagens Aereas"
          description="Site para uma empresa de vendas de passagens aereas e outros serviços adicionais, foi criado todo o design do zero e realizamos a otimização do SEO para que tivesse um bom ranqueamento no google."
          url="https://www.sospassagensaereas.com.br"
          alt="imagem de um site de vendas de passagens aereas chamado sos passagens aereas."
        />
        <CardPortifolio
          imageUrl="/tmp/image/universoturismo.webp"
          title="Universo Turismo"
          description="plataforma que oferece reservas de passagens aereas localizada em Belém, empresa com filiais em diversos estado do brasil esta em constante crescimento."
          url="https://www.universoturismo.com.br"
          alt="imagem de um site de vendas de passagens aereas chamado universo turismo."
        />
      </div>
    </S.Container>
  );
};

export default Portifolio;
