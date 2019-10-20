import moment from 'moment'
import events from 'events'
import c_ss from 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer ,Views  } from 'react-big-calendar'
import React, { useState, useEffect } from "react";


const localizer = momentLocalizer(moment)

const MyCalendar = props => (
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
)

export {MyCalendar}