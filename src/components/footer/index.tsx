import * as S from "./styles";
import Image from "next/image";
const Footer = () => {
  return (
    <S.Footer>
      <Image
        src="/tmp/image/google_secure.png"
        alt="imagem de certificado do google de site seguro;"
        width="145px"
        height="50px"
        placeholder="blur"
        blurDataURL="/tmp/image/google_secure.png"
        layout="fixed"
      />
      <p>
        © {new Date().getFullYear()} | ARCODESOLUÇÕES LTDA | Todos os direitos
        reservados.
      </p>
    </S.Footer>
  );
};

export default Footer;
