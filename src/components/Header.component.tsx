import { Link } from "react-router-dom";
import UserSigned from "./userSigned";

let isLogged = true;

export default function Header() {
  return (
    <header className="top-0 z-10 fixed w-screen px-[16rem] bg-grayLight border-b border-primaryBlack py-[1.6rem] text-[1.4rem] flex justify-between items-center">
      <menu className="flex items-center gap-[3.6rem]">
        <section>
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </section>
        <ul className="flex items-center gap-[1.8rem]">
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

      {isLogged ? (
        <UserSigned></UserSigned>
      ) : (
        <section className="flex items-center font-medium gap-[0.8rem]">
          <button>
            <div className="px-[1.6rem] py-[1.2rem] rounded-[0.6rem] ">
              Sign In
            </div>
          </button>
          <button>
            <div className="px-[1.6rem] py-[1.2rem] rounded-[0.6rem] text-white bg-primaryBlack ">
              Sign Up
            </div>
          </button>
        </section>
      )}
    </header>
  );
}
