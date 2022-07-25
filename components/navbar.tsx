import styles from '../styles/navbar.module.css';
import Button from '@mui/material/Button';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <img src="tmp/image/arcode_logo.png" alt="logo image" />
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="#">Sobre Nós</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Portifólio</a>
        </li>
        <li>
          <a href="#">Idiomas</a>
        </li>
      </ul>
      <Button
        variant="contained"
        disableElevation
        startIcon={<Image src="/tmp/svg/whatsapp.svg" width="20" height="20" />}
      >
        What'sApp
      </Button>
    </nav>
  );
};

export default Navbar;
