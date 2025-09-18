import ReactModal from "react-modal";
import CloseModalBtn from "../CloseModalBtn";

interface SignUpModalProps {
  isSignUpModalOpen: boolean;
  setSignUpModalIsOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function SignUpModal({
  isSignUpModalOpen,
  setSignUpModalIsOpen,
}: SignUpModalProps) {
  return (
    <>
      <ReactModal
        className="bg-primaryBlack/60 text-primaryBlack z-10  flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full"
        isOpen={isSignUpModalOpen}
        ariaHideApp={false}
        onRequestClose={() => setSignUpModalIsOpen(true)}
      >
        <div className="bg-white rounded-[0.6rem] py-[4.2rem] px-[3.2rem] w-[40rem]">
          <div className="flex justify-between items-center">
            <h1 className="font-popOne text-[2.4rem]">Sign Up</h1>
            <CloseModalBtn
              closeModalOpen={() => {
                setSignUpModalIsOpen(false);
              }}
            ></CloseModalBtn>
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
                className="w-full mt-[1.2rem] border-[0.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2rem]  text-[1.2rem]"
              />
            </div>
            <div className="mt-[2rem]">
              <label className="text-[1.2rem] " htmlFor="#">
                Your email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-[1.2rem] border-[0.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2rem]  text-[1.2rem]"
              />
            </div>
            <div className="mt-[2rem]">
              <label className="text-[1.2rem]" htmlFor="#">
                Your password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full border-[0.2rem] mt-[1.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2rem]  text-[1.2rem]"
              />
            </div>
            <button className="p-[1.8rem] font-medium mt-[2.2rem] w-full text-[1.2rem] rounded-[0.6rem] text-white bg-primaryBlack ">
              Sign UP
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
