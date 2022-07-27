import styles from '../styles/navbar.module.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ButtonWhatsapp from './button_whatsapp';
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
      <div className={styles.navArea}>
        <div className="logo">
          <img src="tmp/image/arcode_logo.png" alt="logo image" />
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
        <ButtonWhatsapp />
      </div>
    </nav>
  );
};

export default Navbar;
