import { Button } from "@mui/material";
import * as S from "./styles";
import Image from "next/image";
import ButtonWhatsapp from "../button_whatsapp";

const Hero = () => {
  return (
    <S.Container>
      <section className="title">
        <h1>PRECISANDO DE UM SITE PARA SEU NEGÓCIO?</h1>
        <p>
          Entre para a <strong>era digital</strong> e seja visto pelo seus
          clientes em potencial.
        </p>
        <ButtonWhatsapp />
        <Button
          variant="outlined"
          disableElevation
          style={{
            color: "white",
            border: "1px solid white",
          }}
        >
          VER PORTIFOLIO
        </Button>
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
