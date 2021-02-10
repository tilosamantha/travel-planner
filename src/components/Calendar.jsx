import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import '../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment)

function CalendarView() {
  const events = [{
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Buckingham Palace"
  }];


  return (
    <div className="focus">
      <h1 className="title">At A Glance</h1>
      <Calendar
        localizer={localizer}
        events={events}
        // defaultDate={newDate()}
        defaultView="month"
        style={{ height: 550 }}
      />
    </div>
  )
}


export default CalendarView;