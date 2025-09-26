import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import UserSigned from "./userSigned";

export default function Header() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const modalContext = useContext(ModalContext);

  function openSignInModal() {
    modalContext?.changeToTrueIsOneModalOpen();
    setIsSignInModalOpen(true);
  }

  function openSignUpModal() {
    modalContext?.changeToTrueIsOneModalOpen();
    setIsSignUpModalOpen(true);
  }

  const { currentUser } = useAuth();

  return (
    <div>
      <header
        className={`top-0 fixed w-screen lg:px-[16rem]   md:px-[10rem]  px-[4rem] bg-grayLight/80  backdrop-blur-[1rem] border-b border-primaryBlack py-[1.6rem] text-[1.4rem] flex justify-between items-center ${
          modalContext?.isOneModalOpen ? "z-0" : "z-10"
        }`}
      >
        <menu className="flex items-center gap-[1.6rem] md:gap-[3.6rem]">
          <section>
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[6rem] phone:w-[8rem] md:w-auto"
              />
            </Link>
          </section>
          <ul className="flex items-center gap-[1rem] md:gap-[1.8rem]">
            <li>
              <Link
                to="/"
                className="font-medium text-[1.2rem] phone:text-[1.4rem]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about/#about"
                className="text-grayDark font-medium text-[1.2rem] phone:text-[1.4rem]"
              >
                About us
              </Link>
            </li>
          </ul>
        </menu>

        {currentUser ? (
          <UserSigned
            name={currentUser.displayName || ""}
            email={currentUser.email || ""}
          ></UserSigned>
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
      <SignInModal
        isSignInModalOpen={isSignInModalOpen}
        setSignInModalIsOpen={setIsSignInModalOpen}
      ></SignInModal>
      <SignUpModal
        isSignUpModalOpen={isSignUpModalOpen}
        setSignUpModalIsOpen={setIsSignUpModalOpen}
      ></SignUpModal>
    </div>
  );
}
