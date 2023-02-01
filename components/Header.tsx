import Head from "next/head";
import Nav from "@/components/Nav";

const Header = () => {
  return (
    <>
      <Head>
        <title>강보석 블로그</title>
      </Head>
      <header
        className={
          "w-full max-w-3xl flex flex-row justify-between items-center my-1"
        }
      >
        <span className="mx-2 font-extralight text-lg">나 사나이 강보석</span>
        <Nav />
      </header>
    </>
  );
};

export default Header;
