import { navLink } from "@/data/navlink";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navLink.map((nav) => {
        return (
          <Link
            href={nav.link}
            key={nav.title}
            className="mr-5 font-extralight hover:text-green-600"
          >
            {nav.title}
          </Link>
        );
      })}
      <a
        href="https://botion2.notion.site/Software-Engineer-e435c2799a0341a2bd1de0bab4e43653"
        className="mr-5 font-extralight hover:text-green-600"
      >
        About
      </a>
    </nav>
  );
};

export default Nav;
