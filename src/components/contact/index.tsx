import React, { useState, useEffect } from "react";
import * as S from "./styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { FormFieldsType, ErrorFormsType } from "../../types/formContact";
import { useAppContext } from "../../contexts/AppContext";
import * as Yup from "yup";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const {
    OpenModal,
    loading,
    handlerLoading,
    disabled,
    setDisabledFields,
    setCookieIsAccept,
    cookieAccept
  } = useAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<ErrorFormsType>({
    isError: false,
    message: ""
  });

  const resolver: Resolver<FormFieldsType> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: "required",
              message: "This is required."
            }
          }
        : {}
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFieldsType>({ resolver });

  useEffect(() => {
    setCookieIsAccept(!window.localStorage.getItem("cookie_accept") as boolean);
  }, []);

  async function validate(payload: FormFieldsType): Promise<object> {
    const FormValidationschema = Yup.object({
      name: Yup.string().required("O campo está vazio.").min(5).max(30),
      email: Yup.string().email("Email Inválido."),
      phone: Yup.string().required("Telefone inválido.").min(8).max(15),
      message: Yup.string().required("O campo está vazio.").min(10)
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

  const onSubmit: SubmitHandler<FormFieldsType> = (data) => console.log(data);

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
      <S.Container id="contact">
        <h2 className="title-section">ENTRE EM CONTATO</h2>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrap">
            <div className="form-section-one">
              <TextField
                id="outlined-field-name"
                label={t("contact.inputs_label.name")}
                variant="outlined"
                fullWidth
                type="text"
                sx={{
                  marginBottom: "40px"
                }}
                {...register("name")}
                error={error.isError}
                disabled={disabled}
                helperText={error.isError ? error.message : ""}
              />

              <TextField
                id="outlined-field-email"
                label={t("contact.inputs_label.email")}
                variant="outlined"
                fullWidth
                type="email"
                sx={{
                  marginBottom: "40px",
                  color: "#999"
                }}
                {...register("email")}
                disabled={disabled}
              />

              <TextField
                label={t("contact.inputs_label.phone")}
                {...register("phone")}
                disabled={disabled}
              />

              <Button
                variant="contained"
                sx={{
                  padding: "20px",
                  fontWeight: "600",
                  letterSpacing: "4px",
                  marginTop: "20px  "
                }}
                type="submit"
                disabled={disabled}
              >
                {t("contact.inputs_label.button")}
              </Button>
            </div>
            <div className="form-section-two">
              <TextField
                id="outlined-multiline-message"
                label={t("contact.inputs_label.message")}
                multiline
                type="text"
                fullWidth
                rows={10}
                disabled={disabled}
                {...register("message")}
              />
            </div>
          </div>
        </Box>
      </S.Container>
    </AnimationOnScroll>
  );
};

export default Contact;
