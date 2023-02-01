import { navLink } from "@/data/navlink";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navLink.map((nav) => {
        return (
          <Link href={nav.link} key={nav.title} className="mr-5">
            {nav.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
