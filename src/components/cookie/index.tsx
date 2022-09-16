import * as S from "./styles";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "contexts/AppContext";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const CookieBar = () => {
  const { t } = useTranslation();
  const [cookie, setCookie] = useState<boolean>();
  const { handlerDialog } = useAppContext();
  useEffect(() => {
    setCookie(() => !window.localStorage.getItem("cookie_accept"));
  }, []);

  function handlerCookieEnable(): void {
    window.localStorage.setItem("cookie_accept", "true");
    setCookie(false);
  }

  return cookie ? (
    <S.Container>
      <h4>
        {t("cookie.title")}
        <Image
          src="/tmp/image/cookie.png"
          placeholder="blur"
          blurDataURL="/tmp/image/cookie.png"
          alt={t("cookie.image_alt")}
          height="25px"
          width="25px"
          layout="fixed"
        />
      </h4>
      <article>
        <p>{t("cookie.description")}</p>
        <div>
          <Link href="/policy-privacy">{t("cookie.link")}</Link>
          <Button variant="outlined" onClick={() => handlerDialog(true)}>
            {t("cookie.btn.0")}
          </Button>
          <Button variant="contained" onClick={handlerCookieEnable}>
            {t("cookie.btn.1")}
          </Button>
        </div>
      </article>
    </S.Container>
  ) : (
    <></>
  );
};

export default CookieBar;
