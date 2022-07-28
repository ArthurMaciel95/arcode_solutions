import styles from '../styles/services.module.css';

interface CardServiceProps {
  imageUrl: string;
  description: string;
}

const CardServices = ({ imageUrl, description }: CardServiceProps) => {
  return (
    <div className={styles.cardServices}>
      <img src={imageUrl} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default CardServices;
