import React, { useEffect } from "react";
import * as S from "./styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { FormFieldsType } from "../../types/formContact";
import { useAppContext } from "../../contexts/AppContext";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
const Contact = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    OpenModal,

    handlerLoading,
    disabled,
    setDisabledFields,
    setCookieIsAccept,
  } = useAppContext();

  const resolver: Resolver<FormFieldsType> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFieldsType>({
    resolver,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
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
    reset({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  async function sendEmail(data: object): Promise<void> {
    const urlPath = router.basePath;
    const response = await fetch(`${urlPath}/api/send-email`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      OpenModal();
      //mostrar modal
    }
  }

  const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
    setDisabledFields(true);
    handlerLoading();
    await sendEmail(data);
    handlerLoading();
    setDisabledFields(false);
    cleaningInputs();
  };

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
                  marginBottom: "40px",
                }}
                {...register("name")}
                disabled={disabled}
              />

              <TextField
                id="outlined-field-email"
                label={t("contact.inputs_label.email")}
                variant="outlined"
                fullWidth
                type="email"
                sx={{
                  marginBottom: "40px",
                  color: "#999",
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
                  marginTop: "20px  ",
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
