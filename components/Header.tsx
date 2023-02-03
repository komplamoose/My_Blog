import Nav from "@/components/Nav";
import Link from "next/link";
import metaData from "@/data/metadata";

const Header = () => {
  return (
    <>
      <header
        className={
          "w-full max-w-3xl flex flex-row justify-between items-center my-1"
        }
      >
        <Link href="/" className="mx-2 font-extralight text-lg">
          나 사나이 강보석
        </Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
