import { ReactNode } from "react";
import Header from "@/components/Header";

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <footer />
    </>
  );
};

export default Container;
