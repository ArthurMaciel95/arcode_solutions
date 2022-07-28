import styles from '../styles/contact.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>ENTRE EM CONTATO</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <div className="form1">
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
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
            defaultValue="Escreva uma mensagem"
          />
        </div>
        <Button variant="contained">ENVIAR AGORA!</Button>
      </Box>
    </section>
  );
};

export default Contact;
