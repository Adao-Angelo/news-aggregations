import { Link } from "react-router-dom";

import Logo from "/Logo.svg";
import "../assets/styles/componentsStyles/Header.css";

export default function Header() {
  return (
    <header>
      <menu>
        <section className="logo">
          <img src={Logo} alt="Logo" />
        </section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </menu>
      <section className="signInOrSignUp">
        <Link to="/sign-in">Sign In</Link>

        <Link to="/sign-up">Sign Up</Link>
      </section>
    </header>
  );
}
