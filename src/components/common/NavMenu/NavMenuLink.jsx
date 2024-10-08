import LinkButton from "@/components/ui/LinkButton";
import { navDataLink } from "@/data";
import clsx from "clsx";

const NavMenuLink = ({ classNameList, classNameLink, onMenuToggled }) => {
  const handleMenuClick = () => {
    if (onMenuToggled) {
      onMenuToggled();
    }
  };
  return (
    <ul
      className={clsx(
        "flex flex-col items-center lg:flex-row lg:items-end justify-between gap-8",
        classNameList
      )}
      onClick={handleMenuClick}
    >
      {navDataLink.map(({ id, href, page }) => (
        <li key={id}>
          <LinkButton href={href}>{page}</LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default NavMenuLink;
