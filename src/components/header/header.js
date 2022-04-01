import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Huddle Logo" className="img__logo" />
    </header>
  );
};

export default Header;
