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
        <div className="p-[0.5rem]">
          <p className="text-[1.6rem] font-bold">Adams john</p>
          <p className="email text-[1rem] text-grayDark">
            adaobegginer@gmail.com
          </p>
        </div>
        <ArrowDown />
      </div>
      <div>
        {isVisibleLogout && (
          <div className="absolute  right-[0] top-[8rem] w-[20rem] bg-white rounded-[0.6rem] shadow-[0.2rem] ">
            <div className="px-[2.3rem] py-[2.2rem]">
              <a
                href="#"
                className="block text-white text-[1.2rem] bg-vibrantRed rounded-[0.6rem] p-[1.2rem] text-center"
              >
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
