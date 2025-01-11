import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="pt-[6.2rem] text-center border-t-[0.2rem] border-primaryBlack">
        <p className="text-[2.4rem] font-popOne">NewsLetter</p>
        <div className="mt-[3.5rem] mb-[3.2rem] border-[0.2rem] border-primaryBlack w-[36rem] m-auto  flex items-center py-[0.3rem] justify-between  px-[2.2rem]">
          <input
            type="text"
            className="bg-transparent py-[1.6rem] text-primaryBlack w-full outline-none border-none text-[1.2rem]"
            placeholder="Email Address..."
          />
          <ArrowRight />
        </div>

        <div className="font-medium flex gap-[1.8rem] text-[1.4rem] justify-center">
          <p className="">LinkedIn</p>
          <p className="text-grayDark">Github</p>
          <p className="text-grayDark">Instagram</p>
        </div>

        <p className="text-[1.4rem] mt-[6.6rem]">
          © 2024 Adams John. All rights reserved
        </p>
      </footer>
    </>
  );
}
