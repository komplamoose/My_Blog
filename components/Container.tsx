import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full flex flex-col items-center p-3">
      <Header />
      <main className="w-full max-w-3xl">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
