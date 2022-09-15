import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const ButtonWhatsapp = () => {
  const { t } = useTranslation("common");
  return (
    <Button
      target="_blank"
      variant="whatsapp"
      disableElevation
      className="btnWhats"
      href="https://wa.me/5521989578285?text=Eu%20gostaria%20de%20fazer%20um%20orçamento."
      startIcon={
        <Image
          src="/tmp/svg/whatsapp.svg"
          width="20px"
          height="20px"
          alt="logo what's app, icone redondo verde com uma sinueta de telefone no meio."
        />
      }
    >
      {t("hero.buttons_hero.btn_whats")}
    </Button>
  );
};

export default ButtonWhatsapp;
