import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header.component";
import Footer from "../components/footer.component";
import { TOAST_OPTIONS } from "../constant/toastOptions";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="bg-grayLight pt-[7.9rem] pb-[8.2rem] text-primaryBlack">
      <Header></Header>
      {children}
      <Footer></Footer>
      <Toaster toastOptions={TOAST_OPTIONS} />
    </div>
  );
}
