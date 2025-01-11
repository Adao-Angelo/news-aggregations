import type { ReactNode } from "react";
import Header from "../components/Header.component";
import Footer from "../components/footer.component";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="bg-grayLight pt-[7.9rem] pb-[8.2rem] text-primaryBlack">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
