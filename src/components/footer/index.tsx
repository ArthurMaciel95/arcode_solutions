import * as S from "./styles";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <S.Footer>
      <Image
        src="/tmp/image/google_secure.png"
        alt={t("footer.footer_image_alt")}
        width="145px"
        height="50px"
        placeholder="blur"
        blurDataURL="/tmp/image/google_secure.png"
        layout="fixed"
      />
      <p>
        © {new Date().getFullYear()}
        {t("footer.description")}
      </p>
    </S.Footer>
  );
};

export default Footer;
