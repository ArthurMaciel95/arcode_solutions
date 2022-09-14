import React from "react";
import * as S from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Services: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
      <S.Container id="services">
        <h2>{t("benefits.title")}</h2>
        <div className="services__area">
          <div className="services__layout">
            <div>
              <Image
                placeholder="blur"
                blurDataURL="/tmp/image/google_analytics.png"
                alt="foto de cartões do google analytics como a informação de qual paises as pessoas estão acessando o site e a quantidade em tempo real."
                src="/tmp/image/google_analytics.png"
                height="399px"
                width="576px"
                layout="responsive"
                quality={100}
              />
            </div>
            <div>
              <small>{t("benefits.metrics.small_text")}</small>
              <h3>{t("benefits.metrics.title")}</h3>
              <p>{t("benefits.metrics.subtitle")}</p>
              <ul>
                <li>
                  <Image
                    src="/tmp/svg/user.svg"
                    layout="fixed"
                    width="24px"
                    height="24px"
                  />{" "}
                  {t("benefits.metrics.list.0")}
                </li>
                <li>
                  {" "}
                  <Image
                    src="/tmp/svg/arrow-down-on-square-stack.svg"
                    layout="fixed"
                    width="24px"
                    height="24px"
                  />{" "}
                  {t("benefits.metrics.list.1")}
                </li>
                <li>
                  {" "}
                  <Image
                    src="/tmp/svg/globe-asia-australia.svg"
                    layout="fixed"
                    width="24px"
                    height="24px"
                  />{" "}
                  {t("benefits.metrics.list.2")}
                </li>
                <li>
                  {" "}
                  <Image
                    src="/tmp/svg/clock.svg"
                    layout="fixed"
                    width="24px"
                    height="24px"
                  />{" "}
                  {t("benefits.metrics.list.3")}
                </li>
                <li>
                  {" "}
                  <Image
                    src="/tmp/svg/device-phone-mobile.svg"
                    layout="fixed"
                    width="24px"
                    height="24px"
                  />{" "}
                  {t("benefits.metrics.list.4")}
                </li>
              </ul>
              <p>{t("benefits.metrics.final_para")}</p>
            </div>
          </div>
          <div className="services__layout">
            <div>
              <small>{t("benefits.responsive.small_text")}</small>
              <h3>{t("benefits.responsive.title")}</h3>
              <p>{t("benefits.responsive.subtitle")}</p>
              <div className="services__icons">
                <span>
                  <Image
                    src="/tmp/svg/computer-desktop.svg"
                    layout="fixed"
                    width="50px"
                    height="50px"
                  />
                  <p>{t("benefits.responsive.squares.0")}</p>
                </span>
                <span>
                  <Image
                    src="/tmp/svg/device-phone-mobile-1.svg"
                    layout="fixed"
                    width="50px"
                    height="50px"
                  />
                  <p>{t("benefits.responsive.squares.1")}</p>
                </span>
                <span>
                  <Image
                    src="/tmp/svg/tablet-device.svg"
                    layout="fixed"
                    width="50px"
                    height="50px"
                  />
                  <p>{t("benefits.responsive.squares.2")}</p>
                </span>
              </div>
            </div>
            <div>
              <Image
                placeholder="blur"
                blurDataURL="/tmp/image/devices_arcode.png"
                alt="foto de cartões do google analytics como a informação de qual paises as pessoas estão acessando o site e a quantidade em tempo real."
                src="/tmp/image/devices_arcode.png"
                width="552px"
                height="407px"
                layout="responsive"
                quality="100"
              />
            </div>
          </div>
        </div>
      </S.Container>
    </AnimationOnScroll>
  );
};

export default Services;
