import styles from '../styles/navbar.module.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ButtonWhatsapp from './button_whatsapp';
import Image from 'next/image';
import SwipeableTemporaryDrawer from './sidebar';
import { Button, IconButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppContext } from '../contexts/AppContext';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const { toggleDrawer } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SwipeableTemporaryDrawer />
      <nav className={styles.nav}>
        <div className={styles.navArea}>
          <div className="logo">
            <Image
              src="/tmp/image/arcode_logo.png"
              width="140px"
              height="51px"
              alt="logo da empresa arcode, contém um circulo azul."
              priority
            />
          </div>
          <ul className={styles.menu}>
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
            <li>
              <a href="#portfolio">Portifólio</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={styles.anchor__dropdown}
              >
                Idiomas
                <Image
                  src="/tmp/svg/arrow_down_menu.svg"
                  alt="arrow down icon"
                  width="20px"
                  height="20px"
                />
              </a>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Portuguese</MenuItem>
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Spanish</MenuItem>
              </Menu>
            </li>
          </ul>
          <span className={styles.btnSideBar}>
            <IconButton
              aria-label="menu icon"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </span>

          <ButtonWhatsapp />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
