import * as S from "./styles";
import Image from "next/image";
import type { CardProps } from "../../types/cardPortifolio";
import Link from "next/link";

const CardPortifolio = ({
  imageUrl,
  title,
  description,
  url,
  alt,
}: CardProps) => {
  return (
    <S.Container>
      <Link href={url} target="_blank" rel="noreferrer">
        <Image src={imageUrl} alt={alt} height="259px" width="376px" />
      </Link>
      <h4>{title}</h4>
      <p>{description}</p>
    </S.Container>
  );
};

export default CardPortifolio;
