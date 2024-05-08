import React from 'react';

const Calendar = () => {
  return (
    <div style={styles.welcomeBox}>
      <div style={styles.welcomeText}>
        Welcome to Zenscribe! We're excited to have you here.
      </div>
    </div>
  );
}

const styles = {
  welcomeBox: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ced4da',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  welcomeText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
};

export default Calendar;
