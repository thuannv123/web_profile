import React from "react";
import Infor from "../components/infor";

const Contact = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What clients say</div>
            <div className="main_title">Contact me</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="contact">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="contact_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vitae sapien porttitor, dignissim quam sit
                        ame. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Phasellus vitae sapien.
                      </p>
                    </div>
                    <div className="contact_form_container">
                      <form action="" className="contact_form ">
                        <div>
                          <input
                            type="text"
                            className="contact_input"
                            placeholder="Name"
                            required="required"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            className="contact_input"
                            placeholder="E-mail"
                            required="required"
                          />
                        </div>
                        <input
                          type="text"
                          className="contact_input"
                          placeholder="Subject"
                          required="required"
                        ></input>
                        <textarea
                          className="contact_input contact_textarea"
                          placeholder="Message"
                          required="required"
                        ></textarea>
                        <button className="contact_button">Send Message</button>
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
    </div>
  );
};

export default Contact;
