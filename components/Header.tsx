import Head from "next/head";
import Nav from "@/components/Nav";

const Header = () => {
  return (
    <>
      <Head>
        <title>강보석 블로그</title>
      </Head>
      <header>
        <Nav />
      </header>
    </>
  );
};

export default Header;
