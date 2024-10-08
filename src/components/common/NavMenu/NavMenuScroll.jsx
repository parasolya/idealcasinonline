import { navDataScroll } from "@/data";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const NavMenuScroll = ({
  classNameList,
  classNameLink,
  onClick,
}) => {
  return (
    <ul
        className={clsx(
          "flex items-end lg:items-center justify-between gap-6 lg:gap-8",
          classNameList
        )}
      >
        {navDataScroll.map(({ id, to, section }) => (
          <li key={id}>
            <LinkScroll
              className={clsx(
                "outline-none shadow-none cursor-pointer  hover:underline focus:underline transition",
                classNameLink
              )}
              activeClass="active"
              to={to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              tabIndex={0}
              onClick={() => onClick(to)}
            >
              {section}
            </LinkScroll>
          </li>
        ))}
      </ul>
  )
}

export default NavMenuScroll