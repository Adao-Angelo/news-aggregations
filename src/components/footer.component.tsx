import "../assets/styles/componentsStyles/footer.css";
import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <>
      <footer className="footer-component">
        <p className="f-Mc size-24"> NewsLetter</p>
        <div className="input-email-box">
          <input
            type="text"
            className="address-input-email color-black f-regular"
            placeholder="Email Address..."
          />
          <HiMiniArrowLongRight />
        </div>

        <div className="address">
          <p className="color-black f-medium">LinkedIn</p>
          <p className="color-gray200 f-medium">Github</p>
          <p className="color-gray200 f-medium">Instagram</p>
        </div>

        <p className=" info size-14">© 2024 Adams John. All rights reserved</p>
      </footer>
    </>
  );
}
