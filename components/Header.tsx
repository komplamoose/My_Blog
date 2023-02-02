import Head from "next/head";
import Nav from "@/components/Nav";
import Link from "next/link";
import metaData, { customMetaAtom } from "@/data/metadata";
import { useAtom } from "jotai";

const Header = () => {
  const [customMeta] = useAtom(customMetaAtom);
  const meta = {
    ...metaData,
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
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
