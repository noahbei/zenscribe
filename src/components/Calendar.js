import React, { useState } from 'react';
import '../styles/Calendar.css';
import Button from './Button';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [currentDate, setCurrentDate] = useState(new Date());

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const calendar = [];
    let day = 1;

    // Fill in empty cells before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    // Fill in days of the month
    while (day <= daysInMonth) {
      calendar.push(<div key={day} className="calendar-cell">{day}</div>);
      day++;
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <Button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>Prev</Button>
        <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <Button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>Next</Button>
      </div>
      <div className="calendar-body">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-cell day-of-week">{day}</div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}

export default Calendar;
