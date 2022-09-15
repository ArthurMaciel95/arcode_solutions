import * as S from "./styles";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutUs = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
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
          <Image
            src="/tmp/svg/dots.svg"
            alt=""
            layout="fill"
            placeholder="blur"
            blurDataURL="/tmp/svg/dots.svg"
            height="300"
            width="300"
          />
        </span>
        <h2 className="title-section">{t("about_me.title")}</h2>
        <div>
          <img
            src="/tmp/image/avatar_profile.jpg"
            alt={t("about_me.owner_image_alt")}
            className="avatar"
          />
          <article className="about-description">
            <h4>{t("about_me.owner_name")}</h4>
            <p>{t("about_me.description.p1")}</p>
            <p>{t("about_me.description.p2")}</p>
          </article>
        </div>
      </S.Container>
    </AnimationOnScroll>
  );
};

export default AboutUs;
