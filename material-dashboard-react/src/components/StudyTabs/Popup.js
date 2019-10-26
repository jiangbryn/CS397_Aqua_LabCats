import React from 'react';
import Mycalendar from 'components/Calendar/calendars';
import Button from "components/CustomButtons/Button.js";

const Popup = ({closePopup, db, sid}) => {
    return (
      <div>
        <Mycalendar db={db} sid={sid}/>
        <Button color="info" onClick={closePopup}>Close Me</Button>
      </div>
    );
}

export default Popup;
