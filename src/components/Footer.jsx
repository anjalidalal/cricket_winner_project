import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-part">
        <div className="container-footer">
          <div className="newsletter-section">
            <h2>Get the news and updates.</h2>
            <div className="newsletter-btn">
              <div className="input-field">
                <img
                  src="https://cricketwinner.com/wp-content/themes/mercury/uploads/mail-send_1.png"
                  alt="Cricket Winner"
                  className="email-icon"
                />
                <input
                  type="email"
                  name="sub_email"
                  id="sub_email"
                  placeholder="Email Address"
                  required=""
                  fdprocessedid="jyc4qi"
                />
              </div>
              <button className="subs-btn">Subscribe</button>
            </div>
          </div>
          <div className="footer-info">
            <div className="row">
              <div className="foot-left">
                <img
                  src="https://cricketwinner.com/wp-content/uploads/2022/08/logo.png"
                  className="img-fluid"
                  alt=""
                />
                <p className="copyright">© 2023 Cricket Winner</p>
                <p className="follow-us">Follow us on</p>
                <ul className="social-links">
                  <li className="social-logo">
                    <img
                      alt="Cricket Winner Facebook"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/facebook.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      alt="Cricket Winner Twitter"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/twitter.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      alt="Cricket Winner Instagram"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/instagram.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      alt="Cricket Winner WhatsApp"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/whatsapp.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      alt="Cricket Winner YouTube"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/youtube.svg"
                    />
                  </li>
                </ul>
              </div>
              <div className="foot-right col-md-one">
                <h4 className="foot-heading">Information</h4>
                <div className="foot-data-links">
                  <ul>
                    <li className="list">About Us</li>
                    <li className="list">Privacy Policy</li>
                    <li className="list">Terms and Conditions</li>
                    <li className="list">Careers</li>
                    <li className="list">Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="foot-right col-md-two">
                <h4 className="foot-heading">Information</h4>
                <div className="foot-data-links">
                  <ul>
                    <li className="list">About Us</li>
                    <li className="list">Privacy Policy</li>
                    <li className="list">Terms and Conditions</li>
                    <li className="list">Careers</li>
                    <li className="list">Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="foot-right col-md-three">
                <h4 className="foot-heading">Information</h4>
                <div className="foot-data-links">
                  <ul>
                    <li className="list">About Us</li>
                    <li className="list">Privacy Policy</li>
                    <li className="list">Terms and Conditions</li>
                    <li className="list">Careers</li>
                    <li className="list">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-rights-section">
            <p>
              Copyright 2023 The information contained in CricketWinner may not
              be published, broadcast, rewritten or redistributed without the
              acknowledgement from CricketWinner
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
