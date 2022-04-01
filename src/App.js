import Header from "./components/header/header";
import HeroImage from "./components/hero-image/Hero-image";
import CommunityInfo from "./components/community-info/Community-info";
import Footer from "./components/footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />

      <main className="main__grid--wrapper">
        <HeroImage />
        <CommunityInfo />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
