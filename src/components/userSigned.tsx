import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import "../assets/styles/componentsStyles/userSigned.css";

export default function UserSigned() {
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);

  const toggleVisibility = () => {
    setIsVisibleLogout(!isVisibleLogout);
  };

  return (
    <>
      <section className="userSigned">
        <aside className="info" onClick={toggleVisibility}>
          <div>
            <img src="/user-circle.svg" alt="" />
          </div>
          <div>
            <p className="size-18 f-bold">Adams john</p>
            <p className="email size-12 color-gray200">
              adaobegginer@gmail.com
            </p>
          </div>
          <FaArrowDownLong />
        </aside>
        <div onClick={() => {}}>
          {isVisibleLogout && (
            <aside className="logout">
              <p className="f-medium size-14">logout</p>
            </aside>
          )}
          {!isVisibleLogout && (
            <aside className="logout">
              <p className="f-medium size-14">logout</p>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
