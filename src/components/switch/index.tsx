import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type SwitchProps = {
  label: string;
  Labelposition: "end" | "start" | "top" | "bottom";
};

export default function SwitchLabel({
  label,
  Labelposition = "end"
}: SwitchProps) {
  return (
    <FormControlLabel
      value="end"
      control={<Switch color="primary" />}
      label={label}
      labelPlacement={Labelposition}
    />
  );
}
