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
            desde 2018 venho me aperfeiçoando na criação de sites, aprendi
            diversas técnicas que evoluiram na construção de sites. já trabalhei
            em diversas empresa relacionadas ao ramo de desenvolvimento de web
            sites.
          </p>
          <p>
            Atualmente trabalho por conta propria afim de entregar valor para
            seu negócio, venho me especializando em comércio online, Sass e
            outros produtos.
          </p>
        </article>
      </div>
    </S.Container>
  );
};

export default AboutUs;
