import * as S from "./styles";
import Image from "next/image";
import type { CardProps } from "../../types/cardPortifolio";

const CardPortifolio = ({ imageUrl, title, description, url }: CardProps) => {
  return (
    <S.Container>
      <a href={url} target="__blank">
        <Image src={imageUrl} alt="" height="259px" width="376px" />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
    </S.Container>
  );
};

export default CardPortifolio;
