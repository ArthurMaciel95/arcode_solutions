import styles from '../styles/portifolio.module.css';
import Image from 'next/image';
import type { CardProps } from '../types/cardPortifolio';

const CardPortifolio = ({ imageUrl, title, description, url }: CardProps) => {
  return (
    <div className={styles.card}>
      <a href={url} target="__blank">
        <Image src={imageUrl} alt="" height="259px" width="376px" />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CardPortifolio;
