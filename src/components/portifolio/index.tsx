import * as S from "./styles";
import CardPortifolio from "./portifolio-card";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
const Portifolio = () => {
  const { t } = useTranslation("common");
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
      <S.Container className="portifolio" id="portfolio">
        <h2>{t("portfolio.title")}</h2>
        <div className="card-area">
          <CardPortifolio
            imageUrl="/tmp/image/linksharescreen.png"
            title={t("portfolio.projects.0.title")}
            description={t("portfolio.projects.1.description")}
            url="https://www.linkshare.com.br"
            alt={t("portfolio.projects.0.project_image_alt")}
          />
          <CardPortifolio
            imageUrl="/tmp/image/sospassagensareas.webp"
            title={t("portfolio.projects.1.title")}
            description={t("portfolio.projects.1.description")}
            url="https://www.sospassagensaereas.com.br"
            alt={t("portfolio.projects.1.project_image_alt")}
          />
          <CardPortifolio
            imageUrl="/tmp/image/universoturismo.webp"
            title="Universo Turismo"
            description={t("portfolio.projects.2.description")}
            url="https://www.universoturismo.com.br"
            alt={t("portfolio.projects.2.project_image_alt")}
          />
        </div>
      </S.Container>
    </AnimationOnScroll>
  );
};

export default Portifolio;
