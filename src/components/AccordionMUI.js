import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SimpleAccordion() {
  const Accordion1 = { nazwa: "Czar1", opis: "Opis1" };
  const Accordion2 = { nazwa: "Czar2", opis: "Opis2" };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{Accordion1.nazwa}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Accordion1.opis}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{Accordion2.nazwa}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Accordion2.nazwa}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
