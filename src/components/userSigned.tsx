import { ArrowDown, FileText, Users2Icon } from "lucide-react";
import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { useAuth } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import CloseModalBtn from "./CloseModalBtn";

interface UserSignedProps {
  email: string;
  name: string;
  image?: string;
  articlesCount?: number;
}

export default function UserSigned({
  name,
  email,
  image,
  articlesCount = 0,
}: UserSignedProps) {
  const [isOpenProfileDetails, setIsOpenProfileDetails] = useState(false);
  const modalContext = useContext(ModalContext);
  const { logout } = useAuth();

  const openUserDetailModal = () => {
    modalContext?.changeToTrueIsOneModalOpen();
    setIsOpenProfileDetails(true);
  };

  const closeUserDetailModal = () => {
    setIsOpenProfileDetails(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      closeUserDetailModal();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Get current year for member since
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative">
      <div
        onClick={openUserDetailModal}
        className="flex items-center cursor-pointer gap-[1rem]"
      >
        <div>
          {image ? (
            <img
              src={image}
              alt={`Image of ${name}`}
              className="w-[4rem] h-[4rem] border-[0.1rem] border-stroke rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-[4rem] h-[4rem] border-[0.1rem] border-stroke rounded-full bg-white">
              <Users2Icon
                strokeWidth={2.5}
                width={14}
                className="text-grayDark"
              />
            </div>
          )}
        </div>
        <div className="p-[0.5rem] hidden md:block">
          <p className="text-[1.6rem] font-bold">{name}</p>
          <p className="email text-[1.2rem] text-grayDark">{email}</p>
        </div>
        <ArrowDown className="w-[1.4rem] h-[1.4rem] text-grayDark" />
      </div>

      <ReactModal
        className="bg-primaryBlack/60 text-primaryBlack flex flex-col justify-end items-center backdrop-blur-[0.4rem] h-full p-4"
        isOpen={isOpenProfileDetails}
        ariaHideApp={false}
        onRequestClose={closeUserDetailModal}
      >
        <div className="bg-white rounded-[0.6rem] shadow-md w-[90%] max-w-[35rem] p-[2.5rem] overflow-y-auto max-h-[90vh] relative">
          <div className="flex justify-end items-center">
            <CloseModalBtn
              closeModalOpen={closeUserDetailModal}
              aria-label="Close modal"
            />
          </div>

          <div className="flex items-center gap-[1.6rem] mb-[2rem] mt-[1rem]">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-[5rem] h-[5rem] rounded-full border-[0.2rem] border-primaryBlack"
              />
            ) : (
              <div className="flex items-center justify-center w-[5rem] h-[5rem] rounded-full border-[0.1rem] border-stroke bg-grayLight">
                <Users2Icon
                  strokeWidth={2.5}
                  width={16}
                  className="text-grayDark"
                />
              </div>
            )}
            <div>
              <h2 className="text-[1.6rem] font-bold">{name}</h2>
              <p className="text-[1.2rem] text-grayDark">{email}</p>
            </div>
          </div>

          <div className="flex items-center gap-[1rem] mb-[2.5rem]">
            <FileText className="w-[1.6rem] h-[1.6rem] text-grayDark" />
            <p className="text-[1.3rem] text-grayDark">
              <span className="font-semibold text-primaryBlack">
                {articlesCount}
              </span>{" "}
              articles published
            </p>
          </div>

          <div className="mb-[2.5rem] flex justify-between">
            <p className="text-[1.4rem] text-grayDark">
              Member since:{" "}
              <span className="font-medium text-primaryBlack">
                {currentYear}
              </span>
            </p>
            <p className="text-[1.2rem] text-grayDark">
              <span className="font-bold text-green-500">Active</span>
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="p-[1.5rem] font-medium w-full text-[1.2rem] rounded-[0.6rem] text-white bg-vibrantRed hover:bg-vibrantRed/90 transition"
          >
            Logout
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
