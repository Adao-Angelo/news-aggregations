import { Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import UserSigned from "./userSigned";

let isLogged = false;

export default function Header() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  function openLoginModal() {
    setLoginModalIsOpen(true);
  }

  function closeLoginModal() {
    setLoginModalIsOpen(false);
  }

  useEffect(() => {
    window.scrollTo(2, 0);
  }, []);

  return (
    <header
      className={`top-0 fixed w-screen lg:px-[16rem]  md:px-[10rem]  px-[4rem] bg-grayLight border-b border-primaryBlack py-[1.6rem] text-[1.4rem] flex justify-between items-center ${
        loginModalIsOpen ? "" : "z-10"
      }`}
    >
      <menu className="flex items-center gap-[1.6rem] md:gap-[3.6rem]">
        <section>
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-[8rem] md:w-auto" />
          </Link>
        </section>
        <ul className="flex items-center gap-[1rem] md:gap-[1.8rem]">
          <li>
            <Link to="/" className="font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/#about" className="text-grayDark font-medium">
              About us
            </Link>
          </li>
        </ul>
      </menu>

      {isLogged ? (
        <UserSigned></UserSigned>
      ) : (
        <section className="flex items-center font-medium gap-[0.8rem]">
          <button onClick={openLoginModal}>
            <div className="md:px-[1.6rem] px-[1rem] md:py-[1.2rem] py-[0.8rem] rounded-[0.6rem] md:text-[1.4rem]  text-[1.2rem] ">
              Sign In
            </div>
          </button>
          <button>
            <div className="md:px-[1.6rem] px-[1rem]  md:py-[1.2rem] py-[0.8rem] rounded-[0.6rem] md:text-[1.4rem] text-[1.2rem] text-white bg-primaryBlack ">
              Sign Up
            </div>
          </button>
        </section>
      )}
      <Modal
        className="bg-primaryBlack/60 text-primaryBlack  flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full"
        isOpen={loginModalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setLoginModalIsOpen(true)}
      >
        <div className="bg-white rounded-[0.6rem] py-[4.2rem] px-[3.2rem] w-[40rem]">
          <div className="flex justify-between items-center">
            <h1 className="font-popOne text-[2.4rem]">Sign In</h1>
            <button onClick={closeLoginModal}>
              <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
            </button>
          </div>
          <p className="text-[1.3rem] mt-[1.6rem] text-grayDark">
            Log in now to enjoy a good experience.
          </p>
          <div>
            <div className="mt-[4.2rem]">
              <label className="text-[1.2rem] " htmlFor="#">
                Your email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-[1.2rem] border-[0.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2.2rem]  text-[1.2rem]"
              />
            </div>
            <div className="mt-[2rem]">
              <label className="text-[1.2rem]" htmlFor="#">
                Your password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full border-[0.2rem] mt-[1.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2.2rem]  text-[1.2rem]"
              />
            </div>
            <button className="p-[1.8rem] font-medium mt-[2.2rem] w-full text-[1.2rem] rounded-[0.6rem] text-white bg-primaryBlack ">
              Sign In
            </button>
            <p className="text-[1.3rem] mt-[1.6rem] text-center font-popOne text-grayDark">
              Or
            </p>
            <button className="relative p-[1rem] text-center font-medium mt-[2.2rem] w-full text-[1.2rem] rounded-[0.6rem] border-[0.2rem] border-primaryBlack overflow-hidden group">
              <span className="absolute inset-0 bg-primaryBlack transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
              <span className="relative text-primaryBlack group-hover:text-white z-10 flex items-center justify-center">
                <Github className="m-auto text-center"></Github>
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}
