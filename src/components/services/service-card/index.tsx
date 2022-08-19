import * as S from "./styles";
import Image from "next/image";
interface CardServiceProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const CardServices = ({ imageUrl, description, alt }: CardServiceProps) => {
  return (
    <S.Container>
      <Image
        src={imageUrl}
        alt={alt}
        width="150px"
        height="150px"
        placeholder="blur"
        blurDataURL={imageUrl}
      />
      <p>{description}</p>
    </S.Container>
  );
};

export default CardServices;
