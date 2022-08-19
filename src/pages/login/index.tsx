import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { NextRouter, Router, useRouter } from "next/router";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
interface LoginFormI {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
import { useSession, signIn } from "next-auth/react";
import { object } from "yup";

const Login = () => {
  const [hasError, setHasError] = useState<object>({
    error: false,
    message: "",
  });

  const router = useRouter();

  const handleSubmit = async (): Promise<boolean | any> => {
    setHasError({ error: false });
    const request = await signIn("google", {
      redirect: false,
    });

    console.log(request);

    if (!request) {
      return setHasError({ error: true, message: "" });
    }

    if (!router.query.callback) {
      return await router.push("/");
    }

    return await router.push(router.query.callback as string);
  };

  return (
    <>
      <Box
        name="Credentials"
        component="form"
        sx={{
          maxWidth: "400px",
          background: "var(--card-background)",
          margin: "100px auto",
          padding: " 20px",

          boxShadow: "var(--shadow-color)",
          borderRadius: "4px",
          "& .MuiTextField-root": { marginBottom: "15px" },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            margin: "0px auto",
            width: "160px",
            background: "white",
            padding: "10px",
          }}
        >
          <Image
            src="/tmp/image/arcode_logo.png"
            width="150px"
            height="70px"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </Box>
        <Typography variant="h5" fontFamily="Open sans" fontWeight="400">
          Faça o Login
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ margin: "10px 0px", color: "var(--font-gray-color)" }}
          fontFamily="Open sans"
        >
          Entre em nossa plataforma e descubra diversos templates para montar o
          site do seu jeito.
        </Typography>
        {hasError && <Typography></Typography>}

        <TextField
          id="standard-basic"
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          size="small"
          fullWidth
          type={"password"}
          helperText={<Link href="/forget-password">Esqueceu a senha?</Link>}
        />
        <FormControlLabel
          sx={{ marginBottom: "5px" }}
          value="end"
          control={<Checkbox />}
          label={
            <Typography
              style={{ fontSize: "0.8rem", color: "var(--font-gray-color)" }}
            >
              Lembrar de mim
            </Typography>
          }
          labelPlacement="end"
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Entrar
        </Button>
        <Divider sx={{ margin: "10px 0px" }}>
          <Typography variant="subtitle1">
            <Divider>Ou</Divider>
          </Typography>
        </Divider>
        <Button
          variant="outlined"
          fullWidth
          startIcon={
            <Image
              src="/tmp/svg/google_icon.svg"
              layout="fixed"
              width="20px"
              height="20px"
            />
          }
          onClick={handleSubmit}
        >
          Faça login com o google
        </Button>
      </Box>
    </>
  );
};

export default Login;
