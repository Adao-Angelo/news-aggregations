import { ArrowDown } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

interface UserSignedProps {
  email: string;
  name: string;
  image?: string;
}

export default function UserSigned({ name, email, image }: UserSignedProps) {
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);
  const auth = useContext(AuthContext);

  const toggleVisibility = () => {
    setIsVisibleLogout(!isVisibleLogout);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer gap-[1rem]"
        onClick={toggleVisibility}
      >
        <div>
          <img
            src={image || "/profile.png"}
            alt=""
            className="w-[4rem] h-[4rem] border-[0.1rem] border-primaryBlack rounded-full"
          />
        </div>
        <div className="p-[0.5rem] hidden md:block">
          <p className="text-[1.6rem] font-bold">{name}</p>
          <p className="email text-[1rem] text-grayDark">{email}</p>
        </div>
        <ArrowDown className="w-[1.4rem] h-[1.4rem] text-grayDark" />
      </div>
      <div>
        {isVisibleLogout && (
          <div className="absolute  right-[0] top-[8rem] w-[20rem] bg-white rounded-[0.6rem] shadow-[0.2rem] ">
            <div className="px-[2.3rem] py-[2.2rem]">
              <button
                onClick={auth?.logout}
                className="relative p-[1rem] text-center font-medium  w-full text-[1.2rem] rounded-[0.6rem] border-[0.2rem] border-vibrantRed overflow-hidden group"
              >
                <span className="absolute inset-0 bg-vibrantRed transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
                <span className="relative text-vibrantRed font-semibold group-hover:text-white z-10 flex items-center justify-center">
                  Logout
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
