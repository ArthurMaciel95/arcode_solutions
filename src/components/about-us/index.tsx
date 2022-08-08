import * as S from "./styles";
import Image from "next/image";
const AboutUs = () => {
  return (
    <S.Container id="about">
      <span className="dashed-circle">
        <Image
          src="/tmp/svg/dashed_circle.svg"
          alt="dashed circle blue spinning"
          width="356px"
          height="356px"
        />
      </span>
      <span className="dashed-line">
        <img src="/tmp/svg/dashed_line.svg" alt="dashed line waves" />
      </span>
      <span className="dots">
        <Image src="/tmp/svg/dots.svg" alt="" height="140px" width="140px" />
      </span>
      <h2>SOBRE MIM</h2>
      <div>
        <img
          src="/tmp/image/avatar_profile.jpg"
          alt="imagem de rosto de arthur rocha, usando camisa branca, cabelo preto e olhos castalhos."
          className="avatar"
        />
        <article className="about-description">
          <h4>Arthur Nogueira</h4>
          <p>
            Desde 2018 no mercado, comecei a programar pra suprir uma
            necessidade do meu pai criar um site para seu negócio. e com isso
            ele prosperou bastante na obtenção de seus clientes.
          </p>
          <p>
            Atualmente trabalho por conta propria afim de entregar valor para
            seu negócio, seja com site pessoal, vendas, marketing e etc...
          </p>
        </article>
      </div>
    </S.Container>
  );
};

export default AboutUs;
