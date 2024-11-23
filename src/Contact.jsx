import React from 'react';
import './contact.css'; // Ensure you have the correct CSS for styling

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <p><strong>Facebook:</strong> Lyn Miraflor</p>
            <p><strong>Gmail:</strong> jmiraflor@gbox.ncf.edu.ph</p>
            <p><strong>Contact Number:</strong> 09812915594</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

