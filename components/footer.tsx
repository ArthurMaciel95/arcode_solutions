import styles from '../styles/footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <section className={styles.footer}>
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
    </section>
  );
};

export default Footer;
