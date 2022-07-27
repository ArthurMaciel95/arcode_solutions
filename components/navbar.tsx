import styles from '../styles/navbar.module.css';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <a
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className={styles.anchor__dropdown}
          >
            Idiomas
            <img src="tmp/svg/arrow_down_menu.svg" alt="arrow down icon" />
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
      <Button
        variant="contained"
        disableElevation
        style={{
          backgroundColor: '#2ED105',
        }}
        startIcon={<Image src="/tmp/svg/whatsapp.svg" width="20" height="20" />}
      >
        faça um orçamento
      </Button>
    </nav>
  );
};

export default Navbar;
