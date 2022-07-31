import styles from '../styles/services.module.css';
import Image from 'next/image';
interface CardServiceProps {
  imageUrl: string;
  description: string;
}

const CardServices = ({ imageUrl, description }: CardServiceProps) => {
  return (
    <div className={styles.cardServices}>
      <Image src={imageUrl} alt="" width="150px" height="150px" />
      <p>{description}</p>
    </div>
  );
};

export default CardServices;
