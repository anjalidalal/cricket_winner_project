import React, { useState } from "react";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  //const [isOpenSearchInput, setIsOpenSearchInput] = useState(false);
  const [authMethod, setAuthMethod] = useState("");

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  // const openSearchModal = () => {
  //   setIsOpenSearchInput(true);
  // };

  // const closeSearchModal = () => {
  //   setIsOpenSearchInput(false);
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section id="desktop_header" className="header-part">
        <div className="upper-part">
          <div className="col-1">
            <button className="navbar-m-container" onClick={toggleMenu}>
              {isOpen ? (
                <img
                  height="17px"
                  width="18px"
                  alt="hamburger"
                  src="https://cricketwinner.com/wp-content/themes/mercury/uploads/mobile-hamburger.svg"
                />
              ) : (
                <img
                  alt="close"
                  height="17px"
                  width="18px"
                  src="https://cricketwinner.com/wp-content/themes/mercury/uploads/cross-nav.svg"
                />
              )}
            </button>
            <img
              alt="Cricket Winner"
              data-src="https://cricketwinner.com/wp-content/uploads/2022/08/logo.png"
              className="site-logo"
              src="https://cricketwinner.com/wp-content/uploads/2022/08/logo.png"
            />
          </div>
          <div className="relative">
            <div
              id="mobile-navigation"
              className={isOpen ? "sidepanel" : "sidepanel-open"}
            >
              <div className="menu-items">
                <div className="foot-data-links">
                  <ul>
                    <li className="menu-list">Home</li>
                    <li className="menu-list">News</li>
                    <li className="menu-list">Fantasy Tips</li>
                    <li className="menu-list">Match Predictions</li>
                    <li className="menu-list">IPL 2023</li>
                    <li className="menu-list">Web Stories</li>
                    <li className="menu-list">Leaderboards</li>
                  </ul>
                </div>
              </div>
              <div className="position-absolute-sharing">
                <p className="follow-us-md">Follow us on</p>
                <ul className="social-links-md">
                  <li className="social-logo">
                    <img
                      alt="Cricket Winner Facebook"
                      width="16px"
                      height="16px"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/facebook.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      width="16px"
                      height="16px"
                      alt="Cricket Winner Twitter"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/twitter.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      width="16px"
                      height="16px"
                      alt="Cricket Winner Instagram"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/instagram.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      width="16px"
                      height="16px"
                      alt="Cricket Winner WhatsApp"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/whatsapp.svg"
                    />
                  </li>
                  <li className="social-logo">
                    <img
                      width="16px"
                      height="16px"
                      alt="Cricket Winner YouTube"
                      src="https://cricketwinner.com/wp-content/themes/mercury/uploads/youtube.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="search-box-header">
            <div>
              <input
                type="text"
                name="s"
                id="search"
                value=""
                placeholder="Search.."
                fdprocessedid="3jpmid"
              />
              <span className="close-search">x</span>
            </div>
          </div>
          <div className="col-2">
            <div className="login-sign-up-btn text-end">
              <button
                className="login-btn"
                onClick={() => {
                  openModal();
                  setAuthMethod("login");
                }}
              >
                Login
              </button>
              <button
                className="signup-btn"
                onClick={() => {
                  openModal();
                  setAuthMethod("signup");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-2-md">
            <img
              alt="Search"
              data-src="https://cricketwinner.com/wp-content/themes/mercury/uploads/search-icon-for-mobile.svg"
              className="mobile-search"
              src="https://cricketwinner.com/wp-content/themes/mercury/uploads/search-icon-for-mobile.svg"
            />
            <img
              alt="Login"
              onClick={openModal}
              data-src="https://cricketwinner.com/wp-content/themes/mercury/uploads/login.svg"
              className="mobile-login"
              src="https://cricketwinner.com/wp-content/themes/mercury/uploads/login.svg"
            />
          </div>
          {/* <div className={isOpenSearchInput ? "search-input-md" : ""}>
            <div className="md-input">
              <input type="" name="" placeholder="Search..." />
              <span onClick={closeSearchModal}></span>
            </div>
          </div> */}
        </div>
        <div className="navbar">
          <div className="desktop-menu">
            <ul>
              <li>Home</li>
              <li>News</li>
              <li>Fantasy Tips</li>
              <li>Match Predictions</li>
              <li>IPL 2023</li>
              <li>Web Stories</li>
              <li>Leaderboards</li>
            </ul>
            <div className="be-an-expert">
              <span className="parent-span">Be an Expert</span>{" "}
              <svg
                width="20"
                height="15"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6164 9.06754L14.9492 0.400093C14.7017 0.15268 14.372 0.0168762 14.0204 0.0168762C13.6684 0.0168762 13.3388 0.152875 13.0914 0.400093L12.3045 1.18721C12.0573 1.43423 11.9211 1.76418 11.9211 2.11598C11.9211 2.46759 12.0573 2.80866 12.3045 3.05568L17.3608 8.12315H1.29658C0.572288 8.12315 0 8.69017 0 9.41466V10.5274C0 11.2519 0.572288 11.8761 1.29658 11.8761H17.4182L12.3047 16.9719C12.0575 17.2193 11.9213 17.5403 11.9213 17.8921C11.9213 18.2435 12.0575 18.5691 12.3047 18.8163L13.0916 19.6009C13.339 19.8483 13.6686 19.9832 14.0206 19.9832C14.3722 19.9832 14.7019 19.8466 14.9493 19.5992L23.6166 10.9319C23.8646 10.6837 24.001 10.3524 24 10.0002C24.0008 9.64685 23.8646 9.31534 23.6164 9.06754Z"
                  fill="#ffc305"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <AuthModal
        closeModal={closeModal}
        authMethod={authMethod}
        isOpenModal={isOpenModal}
      />
    </>
  );
};

export default Header;
