import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="pt-[6.2rem] text-center border-t-[0.2rem] border-primaryBlack">
        <p className="text-[2.4rem] font-popOne">NewsLetter</p>
        <div className="mt-[3.5rem] mb-[3.2rem] border-[0.2rem] border-primaryBlack w-[36rem] m-auto  flex items-center py-[0.3rem] justify-between  px-[2.2rem]">
          <input
            type="email"
            className="bg-transparent py-[1.6rem] text-primaryBlack w-full outline-none border-none text-[1.2rem]"
            placeholder="Email Address..."
          />
          <button>
            <ArrowRight />
          </button>
        </div>

        <div className="font-medium flex gap-[1.8rem] text-[1.4rem] justify-center">
          <a
            href="https://www.linkedin.com/in/adaoangelojoao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-grayDark hover:text-primaryBlack transition-all">
              LinkedIn
            </p>
          </a>
          <a
            href="https://github.com/Adao-Angelo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-grayDark hover:text-primaryBlack transition-all">
              Github
            </p>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-grayDark hover:text-primaryBlack transition-all">
              Instagram
            </p>
          </a>
        </div>

        <p className="text-[1.4rem] mt-[6.6rem]">
          © 2023 Adão Ângelo João. All rights reserved
        </p>
      </footer>
    </>
  );
}
