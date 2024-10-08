

import { navData } from "@/data";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

import { useRouter } from "next/router";
import NavMenuScroll from "./NavMenuScroll";
import NavMenuLink from "./NavMenuLink";

const NavMenu = ({ className, onClick, onMenuToggled }) => {
  return (
    <nav
      className={clsx(
        "flex flex-col items-center lg:flex-row gap-8",
        className
      )}
    >
      <NavMenuScroll onClick={onClick} onMenuToggled={onMenuToggled} />
      <NavMenuLink onMenuToggled={onMenuToggled} /> 
    </nav>
  );
};

export default NavMenu;
