import { useAppContext } from "../../../contexts/AppContext";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import * as S from "./styles";
import SwitchLabel from "components/switch";

const DialogCustom = () => {
  const { handlerDialog, showDialog } = useAppContext();

  const handleClickOpen = () => {
    handlerDialog(true);
  };

  const handleClose = () => {
    handlerDialog(false);
  };

  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Este site utiliza Cookies"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Utilizamos cookies e outras tecnologias semelhantes para melhorar a
            sua experiência em nossos serviços, personalizar publicidade e
            recomendar conteúdo de seu interesse em nossa plataforma e em
            serviços de terceiros. Ao navegar pelo site, você autoriza a empresa
            B7Web a coletar estes dados e utilizá-los para estes fins. Consulte
            nossa Política de Privacidade para mais detalhes.
          </DialogContentText>
          <S.Container>
            <section className="wrap-dialog">
              <SwitchLabel label="Necessário" Labelposition="end" />
              <SwitchLabel label="Marketing" Labelposition="end" />
              <SwitchLabel label="Métricas" Labelposition="end" />
            </section>
            <section className="wrap-dialog">
              <SwitchLabel label="Preferências" Labelposition="end" />
              <SwitchLabel label="Estratégico" Labelposition="end" />
              <SwitchLabel label="Estratégico" Labelposition="end" />
            </section>
          </S.Container>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="cancel">
            Recusar
          </Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            Aceitar todos
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogCustom;
