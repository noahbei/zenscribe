import React from 'react';
import PageTitle from '../components/PageTitle';

const Contact = () => {
  const contactStyle = {
    marginLeft: "200px",
    padding: "0 20px"
  }

  const innerStyle = {
    backgroundColor: "white",
    padding: "20px",
    paddingTop: "0px",
    margin: "20px",
    borderRadius: "15px",
    display: "inline-block"
  }

  return (
    <div className={'container-style'} style={contactStyle}>
      <div style={innerStyle}>
        <PageTitle>Contact Us</PageTitle>
        <p>Feel free to reach out to us using the information below:</p>

        <div>
          <h2>Contact Information</h2>
          <p>Email: zenscribe@gmail.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 800 N. State College Blvd</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;