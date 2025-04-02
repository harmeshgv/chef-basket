import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2>Contact us</h2>
        <p>We'd love to hear from you!</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We're always here to help you with your healthy food needs. Whether
            you have a question, feedback, or just want to say hello, our team
            is here to assist you. Please use the form below to get in touch
            with us, or find us on social media for the latest updates and
            promotions
          </p>
          <div className="address">
            <i className="bx bxs-map">
              <span>44 Street NYC, USA 10001</span>
            </i>
            <i className="bx bxs-phone">
              <span>+1 100 104 40001</span>
            </i>
            <i className="bx bxs-envelope">
              <span>contact@foodie.com</span>
            </i>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              cols="30"
              rows="10"
              placeholder="Write your Message"
            ></textarea>
            <input type="button" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
