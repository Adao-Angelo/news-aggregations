import { ArrowDown, Users2Icon } from "lucide-react";
import { useState } from "react";
import ReactModal from "react-modal";

interface UserSignedProps {
  email: string;
  name: string;
  image?: string;
}

export default function UserSigned({ name, email, image }: UserSignedProps) {
  const [isOpenProfileDetails, setIsOpenProfileDetails] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer gap-[1rem]">
        <div>
          {image ? (
            <img
              src={image}
              alt={`Image of ${name}`}
              className="w-[4rem] h-[4rem] border-[0.1rem] border-stroke rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-[4rem] h-[4rem] border-[0.1rem] border-stroke rounded-full">
              <Users2Icon
                strokeWidth={3}
                width={14}
                className="text-grayDark"
              ></Users2Icon>
            </div>
          )}
        </div>
        <div className="p-[0.5rem] hidden md:block">
          <p className="text-[1.6rem] font-bold">{name}</p>
          <p className="email text-[1rem] text-grayDark">{email}</p>
        </div>
        <ArrowDown className="w-[1.4rem] h-[1.4rem] text-grayDark" />
      </div>
      <div>
        <ReactModal
          className="bg-primaryBlack/60 text-primaryBlack flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full"
          isOpen={isOpenProfileDetails}
          ariaHideApp={true}
          onRequestClose={() => setIsOpenProfileDetails(true)}
        >
          <div>
            <div className="w-[20rem] bg-white rounded-[0.6rem] shadow-[0.2rem] ">
              <div className="px-[2.3rem] py-[2.2rem]">
                <button className="relative p-[1rem] text-center font-medium  w-full text-[1.2rem] rounded-[0.6rem] border-[0.2rem] border-vibrantRed overflow-hidden group">
                  <span className="absolute inset-0 bg-vibrantRed transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
                  <span className="relative text-vibrantRed font-semibold group-hover:text-white z-10 flex items-center justify-center">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    </div>
  );
}
