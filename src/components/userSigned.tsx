import { useState } from "react";
import "../assets/styles/componentsStyles/userSigned.css";
import { useSpring, animated } from "@react-spring/web";

export default function UserSigned() {
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);

  const props = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isVisibleLogout ? "auto" : 0,
      opacity: isVisibleLogout ? 1 : 0,
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
          <p className="size-18 f-bold">Adams john</p>
          <p className="email size-12 color-gray200">adaobegginer@gmail.com</p>
        </aside>
        <animated.div style={props}>
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
