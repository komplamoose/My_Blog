import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import metaData from "@/data/metadata";
import Head from "next/head";

declare interface CustomMetaType {
  title: string;
  description: string;
  date: string;
}
interface ContainerProps {
  children: ReactNode;
  customMeta: CustomMetaType | null;
}

const Container = ({ children, customMeta }: ContainerProps) => {
  const meta = {
    ...metaData,
    ...customMeta,
  };
  return (
    <div className="w-full flex flex-col items-center p-3">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <Header />
      <main className="w-full max-w-3xl">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
