import HeroImage from "../../assets/images/illustration-mockups.svg";

const HeroImg = () => {
  return (
    <section className="hero-img img__hero-container">
      <img
        src={HeroImage}
        alt="Mobile and desktop screens"
        className="img__hero"
      />
    </section>
  );
};

export default HeroImg;
