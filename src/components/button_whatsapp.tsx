import { Button } from "@mui/material";

import Image from "next/image";
const ButtonWhatsapp = () => {
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
      faça um orçamento
    </Button>
  );
};

export default ButtonWhatsapp;
