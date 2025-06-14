import React, { useRef, useState } from "react";
import Infor from "../components/Infor";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mydjk83", "template_1m6vz8b", form.current, {
        publicKey: "6OfEktB5TsaUD22Rm",
      })
      .then(
        () => {
          setPopupMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setPopupMessage("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">
              What’s the best way to get in touch with me?
            </div>
            <div className="main_title">Contact me</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="contact">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="contact_text">
                      <p>
                        Feel free to reach out if you have a project in mind,
                        want to collaborate, or just want to say hello. I'm
                        always open to new opportunities and exciting
                        challenges.
                      </p>
                    </div>
                    <div className="contact_form_container">
                      <form
                        action=""
                        className="contact_form"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <div>
                          <input
                            type="text"
                            className="contact_input"
                            placeholder="Name"
                            name="from_name"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            className="contact_input"
                            placeholder="E-mail"
                            name="from_email"
                          />
                        </div>
                        <input
                          type="text"
                          className="contact_input"
                          placeholder="Subject"
                          name="subject"
                        ></input>
                        <textarea
                          className="contact_input contact_textarea"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <button type="submit" className="contact_button">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact_map">
                      <div className="map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.558281593793!2d106.72563387480494!3d10.773612489374964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525f6dc1acced%3A0x79df6732816c1d33!2zOTEgxJDGsOG7nW5nIEI0LCBBbiBM4bujaSDEkMO0bmcsIFRo4bunIMSQ4bupYywgSOG7kyBDaMOtIE1pbmggNzExMTAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1748347737928!5m2!1svi!2s"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Map"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popupMessage && (
        <div className="popup">
          <div className="popup_content">
            <p>{popupMessage}</p>
            <button
              className="contact_button btn-popup"
              onClick={() => setPopupMessage("")}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
