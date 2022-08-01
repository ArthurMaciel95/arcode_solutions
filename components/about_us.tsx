import styles from '../styles/about_us.module.css';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <section className={styles.aboutUs} id="about_us">
      <span className={styles.dashedCircle}>
        <Image
          src="/tmp/svg/dashed_circle.svg"
          alt="dashed circle blue spinning"
          width="356px"
          height="356px"
        />
      </span>
      <span className={styles.dashedLine}>
        <img src="/tmp/svg/dashed_line.svg" alt="dashed line waves" />
      </span>
      <span className={styles.dots}>
        <Image src="/tmp/svg/dots.svg" alt="" height="140px" width="140px" />
      </span>
      <h2>SOBRE NÓS</h2>
      <div>
        <img
          src="/tmp/image/avatar_profile.jpg"
          alt="imagem de rosto de arthur rocha, usando camisa branca, cabelo preto e olhos castalhos."
          className={styles.avatar}
        />
        <article className={styles.aboutUsDescription}>
          <h4>Arthur Nogueira</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
