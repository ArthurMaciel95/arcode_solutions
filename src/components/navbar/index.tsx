import * as S from "./styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import Image from "next/image";
import SwipeableTemporaryDrawer from "../sidebar";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useAppContext } from "../../contexts/AppContext";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const Navbar: React.FunctionComponent = (): JSX.Element => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { locales } = router;

  const { toggleDrawer } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
    router.locale = lang;

    handleClose();
  };

  return (
    <>
      <SwipeableTemporaryDrawer />
      <S.Container id="navbar">
        <div className="nav-area">
          <div className="logo">
            <Image
              src="/tmp/image/arcode_logo.png"
              width="140px"
              height="51px"
              alt={t("navbar.logo_alt")}
              priority
              layout="fixed"
              placeholder="blur"
              blurDataURL="/tmp/image/arcode_logo.png"
            />
          </div>
          <ul className="menu">
            <li>
              <a href="#about">{t("navbar.about_us")}</a>
            </li>
            <li>
              <a href="#contact">{t("navbar.contact")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("navbar.portfolio")}</a>
            </li>
            <li>
              <a href="#faq">{t("navbar.faq")}</a>
            </li>
            <li>
              <a
                id="button-nav-1"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="anchor__dropdown"
              >
                {t("navbar.menu_languages.languages")}
                <Image
                  src="/tmp/svg/arrow_down_menu.svg"
                  alt="arrow down icon"
                  width="20px"
                  height="20px"
                />
              </a>
              <Menu
                id="menu-nav-1"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button"
                }}
              >
                {locales?.map((language, index) => {
                  return (
                    <Link key={index} href={"/"} locale={language}>
                      <MenuItem onClick={() => handleLanguage(language)}>
                        {language}
                      </MenuItem>
                    </Link>
                  );
                })}
              </Menu>
            </li>
          </ul>
          <span className="btn-sidebar">
            <IconButton
              aria-label="menu icon"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </span>
        </div>
      </S.Container>
    </>
  );
};

export default Navbar;
