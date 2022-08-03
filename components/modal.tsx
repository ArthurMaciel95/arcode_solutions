import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useAppContext } from '../contexts/AppContext';
import styles from '../styles/modal.module.css';
import React from 'react';
import Image from 'next/image';

const ModalCustom = () => {
  const { CloseModal, showModal } = useAppContext();

  return (
    <div>
      {/*    <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={CloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <section className={styles.modal}>
            <h3>Messagem enviada com sucesso!</h3>
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
              sx={{ fontWeight: '600', letterSpacing: '22%' }}
              onClick={CloseModal}
            >
              FECHAR A JANELA
            </Button>
          </section>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCustom;
