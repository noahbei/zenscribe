import React, { useState, useEffect } from 'react';
import '../styles/WeeklyCalendar.css';

const WeeklyCalendar = ({ entries }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [ratings, setRatings] = useState(Array(7).fill(0));

  useEffect(() => {
    if (entries.length > 0) {
      const today = new Date();
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));

      const dailyRatings = Array(7).fill(0);
      const countPerDay = Array(7).fill(0);

      entries.forEach(entry => {
        const entryDate = new Date(entry.createdAt.replace(" at ", " "));
        if (entryDate >= startOfWeek && entryDate <= endOfWeek) {
          const dayIndex = entryDate.getDay();
          dailyRatings[dayIndex] += entry.rating;
          countPerDay[dayIndex]++;
        }
      });

      setRatings(dailyRatings.map((totalRating, index) => {
        const count = countPerDay[index];
        return count === 0 ? 0 : totalRating / count;
      }));
    }
  }, [entries]);

  return (
    <div className="weekly-calendar">
      <div className="chart">
        {ratings.map((rating, index) => (
          <div key={index} className="chart-bar" style={{ height: `${rating * 25}px` }}>
            {rating.toFixed(2)}
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
