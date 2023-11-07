import React from "react";
import "./App.css"; // Import CSS for styling

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>

        {/* Home Section */}
        <section id="home" className="section">
          <h1>Shield Veu</h1>
          <p>Protect What Matters Most</p>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2>About Us</h2>
          <p>About Us :3</p>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <h2>Our Services</h2>
          <p>Camera :D</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>1+***-***-****</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 ShieldVeu.com</p>
      </footer>
    </div>
  );
}



export default App;
