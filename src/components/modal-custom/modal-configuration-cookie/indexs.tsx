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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SwitchLabel label="Necessário" Labelposition="end" />
            </AccordionSummary>
            <AccordionDetails>
              Estes cookies são necessários para que o site funcione e não podem
              ser desligados de nossos sistemas. Eles são normalmente colocados
              apenas por ações realizadas por você quando há uma solicitação de
              serviços, tais como definir as suas preferências de privacidade,
              iniciar sessão ou preencher formulários. Você pode configurar o
              seu navegador para bloquear ou enviar alertas sobre estes cookies,
              mas com isso algumas partes do site não funcionarão. Estes cookies
              não armazenam qualquer dado pessoal.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <SwitchLabel label="Analiticos" Labelposition="end" />
            </AccordionSummary>
            <AccordionDetails>
              Estes cookies nos permitem contar visitas e origens, para medir e
              melhorar o desempenho do nosso site. Eles nos ajudam a saber quais
              são as páginas mais e menos populares e a ver como os visitantes
              navegam pelo site. Todas as informações coletadas por estes
              cookies são agregadas, por isso são consideradas anônimas. Se não
              permitir estes cookies, não saberemos quando visitou o nosso site.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <SwitchLabel label="Funcionalidade" Labelposition="end" />
            </AccordionSummary>
            <AccordionDetails>
              Estes cookies permitem que o site forneça uma funcionalidade e
              personalização melhoradas. Podem ser estabelecidos por nós ou por
              fornecedores externos cujos serviços nós exibimos em nossas
              páginas. Se não permitir estes cookies algumas destas
              funcionalidades, ou mesmo todas, podem não funcionar corretamente.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <SwitchLabel label="Preferências" Labelposition="end" />
            </AccordionSummary>
            <AccordionDetails>
              Estes cookies permitem que o site amazene as suas preferências
              como a cor do tema, e outros.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <SwitchLabel label="Estratégico" Labelposition="end" />
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
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
