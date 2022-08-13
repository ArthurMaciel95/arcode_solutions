import * as S from "./styles";
import Button from "@mui/material/Button";
import Image from "next/image";
const Offer = () => {
  return (
    <S.Container>
      <h2>
        Crie seu site na
        <br /> <span>ARCODE SOLUÇÕES</span>
      </h2>
      <h3>
        SITE TOTALMENTE PERSONALIZADO
        <br /> APARTIR DE R$599,90
      </h3>

      <Button
        variant="whatsapp"
        sx={{ padding: "20px 30px", fontSize: "2rem" }}
        href="https://wa.me/5521989578285?text=Eu%20gostaria%20de%20fazer%20um%20orçamento."
      >
        <Image
          src="/tmp/svg/whatsapp.svg"
          width="50px"
          height="50px"
          alt="icone whatsapp"
          priority
        />
        Faça um orçamento conosco agora!
      </Button>
    </S.Container>
  );
};

export default Offer;
