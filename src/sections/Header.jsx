"use client";

import { usePathname, useRouter } from "next/navigation";
import NavMenu from "@/components/common/NavMenu/NavMenu";
import Logo from "@/components/ui/Logo";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import MenuIcon from "/public/menu.svg";
import { BurgerMenu } from "@/components/common/BurgerMenu/BurgerMenu";

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target)) {
        setIsMenuToggled(false);
        setPendingSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onMenuToggled = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const handleClick = (to) => {
    if (
      pathname === "/policy" ||
      pathname === "/game" ||
      pathname === "/contacts"
    ) {
      setPendingSection(to);
      router.push("/");
    }
    return;
  };

  useEffect(() => {
    if (pathname === "/" && pendingSection) {
      const section = document.getElementById(pendingSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setPendingSection(null);
    }
  }, [pathname, pendingSection]);

  return (
    <>
      <header className="absolute left-0 py-9 lg:py-2 z-20 w-full bg-darkBrown">
        <div className="container">
          <div className="w-full flex justify-between items-center">
            <Logo />
            <div>
              <NavMenu className="notLg:hidden" onClick={handleClick} />
              {!isMenuToggled && (
                <div id="navbar" className="lg:hidden">
                  <Button
                    type="button"
                    aria-label="menu"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <MenuIcon width={24} height={24} className="fill-primary" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {isMenuToggled && (
          <BurgerMenu
            className="lg:hidden"
            handleMenuToggled={onMenuToggled}
            isOpened={isMenuToggled}
            handleClick={handleClick}
          />
        )}
      </header>
    </>
  );
};

export default Header;
