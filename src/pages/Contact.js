import React from 'react';

const Contact = () => {
  const contactStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  return (
    <div style={contactStyle}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the information below:</p>

      <div>
        <h2>Contact Information</h2>
        <p>Email: zenscribe@gmail.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 800 N. State College Blvd</p>
      </div>
    </div>
  );
}

export default Contact;