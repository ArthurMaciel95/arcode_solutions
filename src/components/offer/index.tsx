import * as S from "./styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
const Offer = () => {
  const { t } = useTranslation("common");
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
      <S.Container>
        <h2>
          {t("offer.title")}
          <br /> <span>{t("offer.degrade")}</span>
        </h2>
        <h3>
          {t("offer.description")}
          <br /> {t("offer.description2")}
        </h3>

        <Button
          variant="whatsapp"
          sx={{ padding: "20px 30px" }}
          className="btn-whats"
          href="https://wa.me/5521989578285?text=Eu%20gostaria%20de%20fazer%20um%20orçamento."
        >
          <Image
            src="/tmp/svg/whatsapp.svg"
            width="50px"
            height="50px"
            alt="icone whatsapp"
            priority
          />
          {t("offer.button")}
        </Button>
      </S.Container>
    </AnimationOnScroll>
  );
};

export default Offer;
