import { Link } from "react-router-dom";
import UserSigned from "./userSigned";

import Logo from "/Logo.svg";
import "../assets/styles/componentsStyles/Header.css";
let IsLogin = true;

export function changeLogin() {
  IsLogin = false;
}

export default function Header() {
  return (
    <header className="header-component">
      <menu className="f-medium">
        <section className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </section>
        <ul>
          <li>
            <Link to="/" className="color-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="color-gray200">
              About us
            </Link>
          </li>
        </ul>
      </menu>

      {IsLogin ? (
        <UserSigned></UserSigned>
      ) : (
        <section className="signInOrSignUp f-medium">
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </section>
      )}
    </header>
  );
}
