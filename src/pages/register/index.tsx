import React, { useState } from "react";
import * as S from "./styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <Box
        component="form"
        sx={{
          maxWidth: "400px",
          background: "var(--card-background)",
          margin: "120px auto",
          padding: " 20px",

          boxShadow: "var(--shadow-color)",
          borderRadius: "4px",
          "& .MuiTextField-root": { marginBottom: "15px" },
        }}
        noValidate
        autoComplete="off"
      >
        {/*   <Divider sx={{ margin: "10px 0px" }}>
          <Typography>
            <Divider>Ou</Divider>
          </Typography>
        </Divider> */}
        <Typography variant="h4">Bem Vindo</Typography>
        <Typography variant="subtitle1" sx={{ margin: "5px 0px" }}>
          Faça o cadastro conosco para conhecer nossos produtos.
        </Typography>

        <TextField
          id="standard-basic"
          label="Nome"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ width: "45%", marginRight: "15px" }}
        />
        <TextField
          id="outlined-basic"
          label="Sobrenome"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ width: "50%" }}
        />
        <TextField
          id="outlined-basic"
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
          type={showPassword ? "text" : "password"}
        />
        <TextField
          id="outlined-basic"
          label="Confirmar Senha"
          variant="outlined"
          size="small"
          fullWidth
          type={showPassword ? "text" : "password"}
        />
        <TextField
          id="standard-basic"
          label="Telefone"
          variant="outlined"
          size="small"
          fullWidth
        />
        <FormControlLabel
          sx={{ marginBottom: "5px" }}
          value="end"
          control={<Checkbox />}
          label={
            <Typography
              style={{ fontSize: "0.8rem", color: "var(--font-gray-color)" }}
            >
              Eu concordo com os termos de{" "}
              <Link href="/policy-privacy">politica de privacidade</Link>.
            </Typography>
          }
          labelPlacement="end"
        />
        {/*  <Link href="/login">Eu esqueci minha senha.</Link> */}
        <Button variant="contained" fullWidth>
          cadastrar-se
        </Button>
      </Box>
    </>
  );
};

export default Login;
