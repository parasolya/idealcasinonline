import LinkButton from "@/components/ui/LinkButton";
import { navDataLink } from "@/data";
import clsx from "clsx";

const NavMenuLink = ({
  classNameList,
  classNameLink
}) => {
  return (
    <ul
        className={clsx(
          "flex items-end lg:items-center justify-between gap-6 lg:gap-8",
          classNameList
        )}
      >
        {navDataLink.map(({ id, href, page }) => (
          <li key={id}>
           <LinkButton href={href}>{page}</LinkButton>
          </li>
          
        ))}
      </ul>
  )
}

export default NavMenuLink
