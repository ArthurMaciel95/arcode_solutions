import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <img src="tmp/image/google_secure.png" alt="" />
      <p>
        © {new Date().getFullYear()} | ARCODESOLUÇÕES LTDA | Todos os direitos
        reservados.
      </p>
    </section>
  );
};

export default Footer;
