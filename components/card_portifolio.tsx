import styles from '../styles/portifolio.module.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

const CardPortifolio = ({ imageUrl, title, description, url }: CardProps) => {
  return (
    <div className={styles.card}>
      <span></span>
      <img src={imageUrl} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CardPortifolio;