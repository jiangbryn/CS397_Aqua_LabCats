import React from "react";
import moment from 'moment'
import c_ss from 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer ,Views  } from 'react-big-calendar'

const events = [];
const localizer = momentLocalizer(moment);
const MyCalendar = () => {
  return(
    <div>
      <Calendar
        localizer={localizer}
        views={['week','day']}
        defaultView='week'
        step={60}
        events={[events]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default MyCalendar