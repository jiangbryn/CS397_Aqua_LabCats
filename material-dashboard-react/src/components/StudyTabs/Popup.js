import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Mycalendar from 'components/Calendar/calendars';
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(theme => ({
  popup: {
  position: "fixed",
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
  backgroundColor: 'rgba(0,0,0, 0.5)'
},
popup_inner: {
  position: "absolute",
  left: '30%',
  right: '25%',
  top: '3%',
  //bottom: '8%',
  margin: "auto",
  background: "white"
},
close_button: {
  position: "absolute",
  left: '25%',
  right: '25%',
  //margin: "auto",
}
}));
const Popup = ({closePopup}) => {
	const classes = useStyles();
    return (
      <div className={classes.popup}>
        <div className={classes.popup_inner}>
          <Mycalendar/>
          <Button className={classes.close_button} color="info" onClick={closePopup}>Close Me</Button>
        </div>
      </div>
    );
}

export default Popup;
