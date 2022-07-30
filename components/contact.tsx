import React, { ReactNode, useState } from 'react';
import styles from '../styles/contact.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputMask from 'react-input-mask';
import { FormFields } from '../types/formContact';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');

  /**
   * função para limpar campos de contatos.
   */
  function cleaningInputs(): void {
    setName('');
    setEmail('');
    setTel('');
    setMessage('');
  }

  /**
   * função para enviar requisição para email do cliente.
   * @param e evento
   */
  const handlerSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const payload: FormFields = {
      name,
      email,
      tel,
      message,
    };

    console.log('sending!', payload);
  };

  return (
    <section className={styles.contact}>
      <h2>ENTRE EM CONTATO</h2>
      <Box component="form" onSubmit={handlerSubmit}>
        <div className={styles.formWrap}>
          <div className={styles.formSectionOne}>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              fullWidth
              type="text"
              sx={{
                marginBottom: '40px',
              }}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              sx={{
                marginBottom: '40px',
                color: '#999',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputMask
              mask="(99)99999-9999"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            >
              {() => <TextField label="Telefone" />}
            </InputMask>
            <Button
              variant="contained"
              sx={{
                padding: '20px',
                fontWeight: '600',
                letterSpacing: '4px',
                marginTop: '20px  ',
              }}
              type="submit"
            >
              ENVIAR AGORA!
            </Button>
          </div>
          <div className={styles.formSectionTwo}>
            <TextField
              id="outlined-multiline-static"
              label="Mensagem"
              multiline
              fullWidth
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Contact;
