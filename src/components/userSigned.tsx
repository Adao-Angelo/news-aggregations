import { ArrowDown } from "lucide-react";
import { useState } from "react";

export default function UserSigned() {
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);

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
          <img src="/profile.png" alt="" className="w-[4rem] h-[4rem]" />
        </div>
        <div className="p-[0.5rem] hidden md:block">
          <p className="text-[1.6rem] font-bold">Adams john</p>
          <p className="email text-[1rem] text-grayDark">
            adaobegginer@gmail.com
          </p>
        </div>
        <ArrowDown className="w-[1.4rem] h-[1.4rem] text-grayDark" />
      </div>
      <div>
        {isVisibleLogout && (
          <div className="absolute  right-[0] top-[8rem] w-[20rem] bg-white rounded-[0.6rem] shadow-[0.2rem] ">
            <div className="px-[2.3rem] py-[2.2rem]">
              <button className="relative p-[1rem] text-center font-medium  w-full text-[1.2rem] rounded-[0.6rem] border-[0.2rem] border-vibrantRed overflow-hidden group">
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
