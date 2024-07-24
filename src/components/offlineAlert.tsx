import { useState, useEffect } from "react";
import "../assets/styles/componentsStyles/OfflineAlert.css";
import { IoNotificationsOutline } from "react-icons/io5";

const OfflineAlert = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  if (isOffline) {
    return (
      <section className="offline-alert">
        <span className="f-medium size-18">
          <IoNotificationsOutline /> You are offline.
        </span>
      </section>
    );
  }

  return null;
};

export default OfflineAlert;
