import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = (params) => {
  return (
    <footer className="flex__container">
      <div className="social flex__container--social">
        <FaFacebookF className="img__social-icons" />
        <FaTwitter className="img__social-icons" />
        <FaInstagram className="img__social-icons" />
      </div>
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
  );
};

export default Footer;
