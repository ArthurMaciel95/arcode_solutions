import styles from "../styles/cookie_bar.module.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";

const CookieBar = () => {
  const [cookie, setCookie] = useState<boolean>();

  useEffect(() => {
    setCookie((state) => !window.localStorage.getItem("cookie_accept"));
  }, []);

  function handlerCookieEnable(): void {
    window.localStorage.setItem("cookie_accept", "true");
    setCookie(false);
  }

  return cookie ? (
    <span className={styles.cookieBar}>
      <h4>
        Politica de Cookie
        <img src="/tmp/image/cookie.png" alt="biscoito rodando em espiral" />
      </h4>
      <article>
        <p>
          Utilizamos cookies essenciais e tecnologias semelhantes de acordo com
          a nossa Política de Privacidade e, ao continuar navegando, você
          concorda com estas condições.
        </p>
        <div>
          <Link href="/policy-privacy">Confirir as Politicas de Cookies.</Link>
          <Button variant="outlined">Gerenciar Cookies</Button>
          <Button variant="contained" onClick={handlerCookieEnable}>
            Aceitar todos
          </Button>
        </div>
      </article>
    </span>
  ) : (
    <></>
  );
};

export default CookieBar;
