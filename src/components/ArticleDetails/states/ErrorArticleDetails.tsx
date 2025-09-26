import { RefreshCw } from "lucide-react";

interface ErrorProps {
  message?: string;
  onRetry: () => void;
}

export default function ErrorArticleDetails({
  message = "An error occurred when carrying the article.",
  onRetry,
}: ErrorProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] text-center space-y-6">
      <div className=" px-6 py-10 w-full max-w-full">
        <h2 className="text-primaryBlack font-bold text-4xl mb-4">
          Something went wrong
        </h2>
        <p className="text-grayDark mb-6 text-[1.6rem]">{message}</p>

        <button
          onClick={onRetry}
          className=" text-[1.6rem] m-auto flex items-center gap-2 bg-vibrantRed text-white font-semibold px-5 py-3 rounded-md"
        >
          <RefreshCw className="w-5 h-5" />
          Try again
        </button>
      </div>
    </section>
  );
}
