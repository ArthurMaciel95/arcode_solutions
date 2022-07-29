import styles from '../styles/faq.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Fqa = () => {
  return (
    <section className={styles.faq}>
      <h2>PERGUNTAS FREQUENTES</h2>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className={styles.accordionSummary}>
            COMO SOLICITAR A CRIAÇÃO DE UM SITE
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDescription}>
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
          <p className={styles.accordionSummary}>
            QUANTO CUSTA A MANUTENÇÃO DO MEU SITE
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDescription}>
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
          <p className={styles.accordionSummary}>
            COMO SOLICITAR A CRIAÇÃO DE UM SITE
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDescription}>
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
          <p className={styles.accordionSummary}>
            QUANTO CUSTA A MANUTENÇÃO DO MEU SITE
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDescription}>
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
          <p className={styles.accordionSummary}>
            COMO SOLICITAR A CRIAÇÃO DE UM SITE
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDescription}>
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
          <p className={styles.accordionSummary}>
            QUANTO CUSTA A MANUTENÇÃO DO MEU SITE
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordionDescription}>
            Cobramos <strong>R$40,00</strong> por mês para manter o site
            funcionando e o tempo todo no ar. Esse valor inclui o custo de
            hospedagem. Nenhum outro valor será cobrado.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default Fqa;
