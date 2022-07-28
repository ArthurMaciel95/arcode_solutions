import React from 'react';
import styles from '../styles/contact.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Contact = () => {
  const handlerSubmit: React.FC = (): any => {
    return null;
  };
  return (
    <section className={styles.contact}>
      <h2>ENTRE EM CONTATO</h2>
      <Box component="form">
        <div className={styles.formWrap}>
          <div className={styles.form1}>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              fullWidth
              id="outlined-basic"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              label="Whatsapp"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Mensagem"
              multiline
              rows={4}
            />
          </div>
        </div>
        <Button variant="contained">ENVIAR AGORA!</Button>
      </Box>
    </section>
  );
};

export default Contact;
