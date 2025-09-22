import { GithubIcon } from "lucide-react";
import React, { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { useAuth } from "../../context/AuthContext";
import CloseModalBtn from "../CloseModalBtn";

interface SignUpModalProps {
  isSignUpModalOpen: boolean;
  setSignUpModalIsOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function SignUpModal({
  isSignUpModalOpen,
  setSignUpModalIsOpen,
}: SignUpModalProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { signup, loginWithGitHub } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      setSignUpModalIsOpen(false);
    } catch (error) {
      setError(
        `Sign up failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }

    setLoading(false);
  };

  const handleGitHubSignup = async (): Promise<void> => {
    try {
      setError("");
      setLoading(true);
      await loginWithGitHub();
      setSignUpModalIsOpen(false);
    } catch (error) {
      setError(
        `GitHub sign up failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }

    setLoading(false);
  };

  return (
    <ReactModal
      className="bg-primaryBlack/60 text-primaryBlack z-10 flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full"
      isOpen={isSignUpModalOpen}
      ariaHideApp={false}
      onRequestClose={() => setSignUpModalIsOpen(false)}
    >
      <div className="overflow-scroll h-[60rem] p-5">
        <div className="bg-white rounded-[0.6rem] py-[4.2rem] px-[3.2rem] w-[40rem]">
          <div className="flex justify-between items-center">
            <h1 className="font-popOne text-[2.4rem]">Sign Up</h1>
            <CloseModalBtn
              closeModalOpen={() => {
                setSignUpModalIsOpen(false);
              }}
            />
          </div>
          <p className="text-[1.3rem] mt-[1.6rem] text-grayDark">
            Create an account to enjoy a great experience.
          </p>

          {error && (
            <div className="mt-[2rem] p-[1.2rem] bg-red-100 border border-red-400 text-red-700 rounded-[0.4rem] text-[1.2rem]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mt-[4.2rem]">
              <label className="text-[1.2rem]" htmlFor="signup-name">
                Your name
              </label>
              <input
                id="signup-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="w-full mt-[1.2rem] border-[0.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2rem] text-[1.2rem]"
                required
              />
            </div>
            <div className="mt-[2rem]">
              <label className="text-[1.2rem]" htmlFor="signup-email">
                Your email
              </label>
              <input
                id="signup-email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-[1.2rem] border-[0.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2rem] text-[1.2rem]"
                required
              />
            </div>
            <div className="mt-[2rem]">
              <label className="text-[1.2rem]" htmlFor="signup-password">
                Your password
              </label>
              <input
                id="signup-password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full border-[0.2rem] mt-[1.2rem] placeholder:text-primaryBlack border-primaryBlack p-[2rem] text-[1.2rem]"
                required
              />
            </div>
            <button
              disabled={loading}
              className="p-[1.8rem] font-medium mt-[2.2rem] w-full text-[1.2rem] rounded-[0.6rem] text-white bg-primaryBlack disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-[2rem] text-center">
            <p className="text-[1.2rem] text-grayDark mb-[1rem]">
              Or sign up with
            </p>
            <button
              onClick={handleGitHubSignup}
              disabled={loading}
              className="flex items-center justify-center gap-[1rem] p-[1.5rem] w-full border-[0.2rem] border-primaryBlack rounded-[0.6rem] text-[1.2rem] disabled:opacity-50"
            >
              <GithubIcon></GithubIcon>
              Sign up with GitHub
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
