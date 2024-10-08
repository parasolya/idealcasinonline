import { navData } from "@/data";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

import { useRouter } from "next/router";
import NavMenuScroll from "./NavMenuScroll";
import NavMenuLink from "./NavMenuLink";

const NavMenu = ({
  className,
  classNameList
}) => {
  return (
    <nav className={clsx(
      "flex items-end lg:items-center justify-between gap-[10px] lg:gap-8",
      className
    )}>
      <NavMenuScroll />
      <NavMenuLink />
    </nav>
  );
};

export default NavMenu;
