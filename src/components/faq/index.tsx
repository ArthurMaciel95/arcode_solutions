import * as S from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
const Fqa = () => {
  const { t } = useTranslation();
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
      <S.Container id="faq">
        <h2>PERGUNTAS FREQUENTES</h2>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="summary">{t("faq.faq_question.faq1.question")}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="description">{t("faq.faq_question.faq1.answer")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className="summary">{t("faq.faq_question.faq2.question")}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="description">{t("faq.faq_question.faq2.answer")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <p className="summary">{t("faq.faq_question.faq3.question")}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="description">{t("faq.faq_question.faq3.answer")}</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <p className="summary">{t("faq.faq_question.faq4.question")}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="description">{t("faq.faq_question.faq4.answer")}</p>
          </AccordionDetails>
        </Accordion>
      </S.Container>
    </AnimationOnScroll>
  );
};

export default Fqa;
