import Logo from "./assets/images/logo.svg";
import HeroImg from "./assets/images/illustration-mockups.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <img src={Logo} alt="Huddle Logo" className="img__logo" />
      </header>

      <main className="main__grid--wrapper">
        <section className="hero-img img__hero-container">
          <img
            src={HeroImg}
            alt="Mobile and desktop screens"
            className="img__hero"
          />
        </section>
        <section className="community-info flex__container--community">
          <h1 className="title__primary">
            Build The Community Your Fans Will Love
          </h1>
          <p className="content">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a role="button" href="#register" className="btn">
            Register
          </a>
        </section>
      </main>

      <footer className="flex__container">
        <section className="social flex__container--social">
          <FaFacebookF className="img__social-icons" />
          <FaTwitter className="img__social-icons" />
          <FaInstagram className="img__social-icons" />
        </section>
        <p className="footer">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          <br />
          Coded by <a href="#bb">Brian Johnson</a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
