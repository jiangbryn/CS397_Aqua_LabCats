import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Mycalendar from 'components/Calendar/calendars';
import Button from "components/CustomButtons/Button.js";

const Popup = ({closePopup}) => {
    return (
      <div>
        <Mycalendar />
        <Button color="info" onClick={closePopup}>Close Me</Button>
      </div>
    );
}

export default Popup;
