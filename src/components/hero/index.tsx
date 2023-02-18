import { Button } from "@mui/material";
import * as S from "./styles";
import Image from "next/image";
import ButtonWhatsapp from "../button_whatsapp";
import { useTranslation } from "next-i18next";
const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <S.Container>
      <section className="hero">
        <div className="title">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
          <ButtonWhatsapp />
          <Button
            variant="outlined"
            disableElevation
            style={{
              color: "white",
              border: "1px solid white"
            }}
            href="/#portfolio"
          >
            {t("hero.buttons_hero.btn_outline")}
          </Button>
        </div>
        <div className="hero_image">
          <Image
            src="/tmp/image/hero_desktop_mobile.png"
            width="650px"
            height="400px"
            placeholder="blur"
            blurDataURL="/tmp/image/hero_desktop_mobile.png"
          />
        </div>
      </section>
      <span className="arrow-down">
        <Image
          src="/tmp/svg/arrow_down.svg"
          alt="seta apontando para baixo"
          width="35px"
          height="35px"
        />
      </span>
    </S.Container>
  );
};

export default Hero;
