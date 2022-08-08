import { Button } from "@mui/material";
import Image from "next/image";
const ButtonWhatsapp = () => {
  return (
    <Button
      target="_blank"
      variant="contained"
      disableElevation
      style={{
        backgroundColor: "#2ED105",
        marginRight: "20px",
      }}
      className="btnWhats"
      href="https://wa.me/5521989578285?text=Eu%20gostaria%20de%20fazer%20um%20orçamento."
      startIcon={<Image src="/tmp/svg/whatsapp.svg" width="20" height="20" />}
    >
      faça um orçamento
    </Button>
  );
};

export default ButtonWhatsapp;
