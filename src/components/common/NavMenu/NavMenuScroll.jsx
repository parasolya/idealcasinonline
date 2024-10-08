import { navDataScroll } from "@/data";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const NavMenuScroll = ({
  classNameList,
  classNameLink,
  onClick,
  onMenuToggled,
}) => {

  const handleItemClick = (to) => {
    onClick(to); 
    if (onMenuToggled) {
      onMenuToggled(); 
    }
  };

  return (
    <ul
        className={clsx(
          "flex flex-col items-center lg:flex-row lg:items-end  justify-between gap-8",
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
              onClick={() => handleItemClick(to)}
            >
              {section}
            </LinkScroll>
          </li>
        ))}
      </ul>
  )
}

export default NavMenuScroll