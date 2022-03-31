import Logo from "./assets/images/logo.svg";
import HeroImg from "./assets/images/illustration-mockups.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Huddle Logo" />
      </header>
      <main>
        <section>
          <img src={HeroImg} alt="Mobile and desktop screens" />
        </section>
        <section>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a role="button" href="#register">
            Register
          </a>
        </section>
        <section className="icons__social"></section>
      </main>

      <footer>
        <p class="attribution">
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
    </div>
  );
}

export default App;
