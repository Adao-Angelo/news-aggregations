import { useState } from "react";
import "../assets/styles/componentsStyles/userSigned.css";
import { useSpring, animated } from "@react-spring/web";
import { FaArrowDownLong } from "react-icons/fa6";
import { changeLogin } from "./Header.component";

export default function UserSigned() {
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);

  const props = useSpring({
    from: { opacity: 0, display: "none" },
    to: {
      opacity: isVisibleLogout ? 1 : 0,
      display: isVisibleLogout ? "block" : "none",
    },
    config: { duration: 300 },
  });

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
        <animated.div
          style={props}
          onClick={() => {
            changeLogin();
            alert("logout");
          }}
        >
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
        </animated.div>
      </section>
    </>
  );
}
