import { Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import UserSigned from "./userSigned";

let isLogged = false;

export default function Header() {
  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  function openSignInModal() {
    setSignInModalIsOpen(true);
  }

  function closeSignInModal() {
    setSignInModalIsOpen(false);
  }

  function openSignUpModal() {
    setSignUpModalIsOpen(true);
  }

  function closeSignUpModal() {
    setSignUpModalIsOpen(false);
  }

  useEffect(() => {
    window.scrollTo(2, 0);
  }, []);

  return (
    <div>
      <header
        className={`top-0 fixed w-screen lg:px-[16rem]   md:px-[10rem]  px-[4rem] bg-grayLight/80  backdrop-blur-[1rem] border-b border-primaryBlack py-[1.6rem] text-[1.4rem] flex justify-between items-center ${
          signInModalIsOpen || signUpModalIsOpen ? "z-0" : "z-10"
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
          <section className="flex items-center  font-medium gap-[0.8rem]">
            <button onClick={openSignInModal}>
              <div className="md:px-[1.6rem] px-[1rem] md:py-[1.2rem] py-[0.8rem] rounded-[0.6rem] md:text-[1.4rem]  text-[1.2rem] ">
                Sign In
              </div>
            </button>
            <button>
              <div
                onClick={openSignUpModal}
                className="md:px-[1.6rem] px-[1rem]  md:py-[1.2rem] py-[0.8rem] rounded-[0.6rem] md:text-[1.4rem] text-[1.2rem] text-white bg-primaryBlack "
              >
                Sign Up
              </div>
            </button>
          </section>
        )}
      </header>
      <Modal
        className="bg-primaryBlack/60 text-primaryBlack  flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full"
        isOpen={signInModalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setSignInModalIsOpen(true)}
      >
        <div className="bg-white rounded-[0.6rem] py-[4.2rem] px-[3.2rem] w-[40rem]">
          <div className="flex justify-between items-center">
            <h1 className="font-popOne text-[2.4rem]">Sign In</h1>
            <button onClick={closeSignInModal}>
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
      <Modal
        className="bg-primaryBlack/60 text-primaryBlack z-10  flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full"
        isOpen={signUpModalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setSignUpModalIsOpen(true)}
      >
        <div className="bg-white rounded-[0.6rem] py-[4.2rem] px-[3.2rem] w-[40rem]">
          <div className="flex justify-between items-center">
            <h1 className="font-popOne text-[2.4rem]">Sign Up</h1>
            <button onClick={closeSignUpModal}>
              <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
            </button>
          </div>
          <p className="text-[1.3rem] mt-[1.6rem] text-grayDark">
            Sign Up now to enjoy a good experience.
          </p>
          <div>
            <div className="mt-[4.2rem]">
              <label className="text-[1.2rem] " htmlFor="#">
                Your name
              </label>
              <input
                type="email"
                placeholder="Your name"
                className="w-full mt-[1.2rem] border-[0.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2.2rem]  text-[1.2rem]"
              />
            </div>
            <div className="mt-[2rem]">
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
              Sign UP
            </button>
            <p className="text-[1.3rem] mt-[1.6rem] text-center font-popOne text-grayDark">
              Or
            </p>
            {/* <button className="relative p-[1rem] text-center font-medium mt-[2.2rem] w-full text-[1.2rem] rounded-[0.6rem] border-[0.2rem] border-primaryBlack overflow-hidden group">
              <span className="absolute inset-0 bg-primaryBlack transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
              <span className="relative text-primaryBlack group-hover:text-white z-10 flex items-center justify-center">
                <Github className="m-auto text-center"></Github>
              </span>
            </button> */}
          </div>
        </div>
      </Modal>
    </div>
  );
}
