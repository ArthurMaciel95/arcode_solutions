import * as S from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Fqa = () => {
  return (
    <S.Container id="faq">
      <h2>PERGUNTAS FREQUENTES</h2>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="summary">Como solicitar a criação do meu site?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="description">
            Você chama a gente pelo <strong>WhatsApp</strong> e conta um pouco
            sobre o seu site e o que você quer. Nosso time te responderá
            rapidamente e pedirá o máximo de informações possível para que seu
            site fique perfeito. Começamos a fazer no mesmo instante e
            entregamos em até 2 dias úteis.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p className="summary">Quanto custa a manuteção do meu site?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="description">
            Cobramos <strong>R$40,00</strong> por mês para manter o site
            funcionando e o tempo todo no ar. Esse valor inclui o custo de
            hospedagem. Nenhum outro valor será cobrado.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="summary">
            Quanto tempo demora para que meu site seja localizado por sites de
            busca?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="description">
            Normalmente, sites de busca como o Google e o Yahoo demoram no
            <strong> máximo 03 meses</strong> para localizar seu site na rede.
            Entretanto, cadastramos nossos clientes nos sites de buscas logo
            após a finalização do projeto para que esse processo seja mais
            rápido.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="summary">Porque ter um site?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="description">
            Na Era Digital em que estamos vivendo, fazer um site faz toda a
            diferença para uma empresa. Pois a internet definitivamente se
            tornou uma vitrine importante para as empresas, e não expor seus
            produtos e serviços nesta rede pode prejudicar os negócios e o
            desenvolvimento da empresa.
          </p>
        </AccordionDetails>
      </Accordion>
    </S.Container>
  );
};

export default Fqa;
