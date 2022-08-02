import styles from '../styles/cookie_bar.module.css';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
const CookieBar = () => {
  const [cookie, setCookie] = useState<Boolean>();

  useEffect(() => {
    setCookie((state) => !window.localStorage.getItem('cookie_accept'));
  }, []);

  function handlerCookieEnable(): void {
    window.localStorage.setItem('cookie_accept', 'true');
    setCookie(false);
  }
  console.log(cookie);
  return cookie ? (
    <span className={styles.cookieBar}>
      <h4>Politica de Cookie</h4>
      <article>
        <p>
          Utilizamos cookies essenciais e tecnologias semelhantes de acordo com
          a nossa Política de Privacidade e, ao continuar navegando, você
          concorda com estas condições.
        </p>
        <div>
          <a href="/policy-privacy" target="__blank">
            Configurações de cookie.
          </a>
          <Button variant="contained" onClick={handlerCookieEnable}>
            Aceitar
          </Button>
        </div>
      </article>
    </span>
  ) : (
    <></>
  );
};

export default CookieBar;
