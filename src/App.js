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
      <main>
        <section className="hero">
          <img
            src={HeroImg}
            alt="Mobile and desktop screens"
            className="img__hero"
          />
        </section>
        <section className="community-info">
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
        <section className="social">
          <FaFacebookF className="img__social-icons" />
          <FaTwitter className="img__social-icons" />
          <FaInstagram className="img__social-icons" />
        </section>
      </main>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#bb">Your Name Here</a>.
        </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
