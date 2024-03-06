import React, { useState } from 'react';
import '../styles/WeeklyCalendar.css';

const WeeklyCalendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Ratings need to be updated later on per user account
  const [ratings, setRatings] = useState([5, 6, 10, 8, 9, 2, 6]);

  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  return (
    <div className="weekly-calendar">
      <div className="chart">
        {ratings.map((rating, index) => (
          <div key={index} className="chart-bar" style={{ height: `${rating * 25}px` }} onClick={() => handleRatingChange(index, rating)}>
            {rating}
          </div>
        ))}
      </div>
      <div className="day-labels">
        {daysOfWeek.map(day => (
          <div key={day} className="day-label">{day}</div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyCalendar;
