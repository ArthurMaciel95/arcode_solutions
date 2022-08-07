import React, { ReactNode, useState, useEffect } from "react";
import styles from "../styles/contact.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import { FormFieldsType, ErrorFormsType } from "../types/formContact";
import { useAppContext } from "../contexts/AppContext";
import * as Yup from "yup";
const Contact = () => {
  const {
    OpenModal,
    loading,
    handlerLoading,
    disabled,
    setDisabledFields,
    setCookieIsAccept,
    cookieAccept,
  } = useAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<ErrorFormsType>({
    isError: false,
    message: "",
  });

  useEffect(() => {
    setCookieIsAccept(!window.localStorage.getItem("cookie_accept") as boolean);
  }, []);

  async function validate(payload: FormFieldsType): Promise<object> {
    const FormValidationschema = Yup.object({
      name: Yup.string().required("O campo está vazio.").min(5).max(30),
      email: Yup.string().email("Email Inválido."),
      phone: Yup.string().required("Telefone inválido.").min(8).max(15),
      message: Yup.string().required("O campo está vazio.").min(10),
    });

    return await FormValidationschema.validate(payload);
  }

  /**
   * função para limpar campos de contatos.
   */
  function cleaningInputs(): void {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  /**
   * função para enviar requisição para email do cliente.
   * @param e evento
   */
  const handlerSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();

      const payload: FormFieldsType = {
        name,
        email,
        phone,
        message,
      };
      await validate(payload);

      setDisabledFields(true);
      handlerLoading();

      //ADICIONAR LOGICA PARA ENVIO DE EMAIL
      setTimeout(() => {
        OpenModal();
        handlerLoading();
        setDisabledFields(false);
      }, 3000);
      cleaningInputs();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.contact} id="contact">
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
                marginBottom: "40px",
              }}
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              error={error.isError}
              disabled={disabled}
              helperText={error.isError ? error.message : ""}
            />

            <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              sx={{
                marginBottom: "40px",
                color: "#999",
              }}
              value={email}
              disabled={disabled}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Celular"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={disabled}
            />

            <Button
              variant="contained"
              sx={{
                padding: "20px",
                fontWeight: "600",
                letterSpacing: "4px",
                marginTop: "20px  ",
              }}
              type="submit"
              disabled={disabled}
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
              name="message"
              disabled={disabled}
            />
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Contact;
