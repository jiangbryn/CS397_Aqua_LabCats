import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Mycalendar from "components/Calendar/calendars";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";

const Popup = ({ closePopup }) => {
  return (
    <div>
      <Mycalendar />
      <Typography paragraph style={{ textAlign: "center" }}>
        <Button color="info" onClick={closePopup}>
          Close Me
        </Button>
      </Typography>
    </div>
  );
};

export default Popup;
