import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex p-[5rem] text-primaryBlack w-screen h-screen items-center justify-center">
      <div className="text-center">
        <h3 className="font-bold text-[3rem]">Page Not Found</h3>
        <p className="text-grayDark text-[1.8rem] my-[1rem]">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link to="/" className="text-[1.8rem] underline">
          Go to Home
        </Link>
      </div>
    </section>
  );
}
