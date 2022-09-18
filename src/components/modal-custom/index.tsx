import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useAppContext } from "../../contexts/AppContext";
import * as S from "./styles";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const ModalCustom = () => {
  const { CloseModal, showModal } = useAppContext();
  const { t } = useTranslation("common");
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={CloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={showModal}>
          <S.Container>
            <h3>{t("modal_email.title")}</h3>
            <Image
              src="/tmp/svg/check_success.svg"
              alt=""
              width="110px"
              height="110px"
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{ fontWeight: "600", letterSpacing: "22%" }}
              onClick={CloseModal}
            >
              {t("modal_email.btn")}
            </Button>
          </S.Container>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCustom;
