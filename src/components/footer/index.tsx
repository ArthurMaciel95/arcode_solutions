import * as S from "./styles";
import Image from "next/image";
const Footer = () => {
  return (
    <S.Footer>
      <Image
        src="/tmp/image/google_secure.png"
        alt="imagem de certificado do google de site seguro;"
        width="155px"
        height="56px"
      />
      <p>
        © {new Date().getFullYear()} | ARCODESOLUÇÕES LTDA | Todos os direitos
        reservados.
      </p>
    </S.Footer>
  );
};

export default Footer;
