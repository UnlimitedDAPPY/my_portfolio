import React, { useEffect } from "react";
import "./index.css";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Project from "./component/project.jsx";
import Services from "./component/Services.jsx";
import SwiperSample from "./component/SwiperSample.jsx";
import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";
import Logo from "./assets/images/MyLogo.webp";

const App = () => {
  useEffect(() => {
    const favicon =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/webp";
    favicon.href = Logo;
    document.head.appendChild(favicon);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="app">
      <Header
        logo={<img src={Logo} alt="Logo" className="w-[5%]" />}
        links={navLinks}
      />
      <main>
        <Home />
        <About />

        <Services />

        <Project />
      </main>
      <Footer links={navLinks} />
    </div>
  );
};

export default App;

