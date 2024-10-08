import Logo from "@/components/ui/Logo";
import Email from "@/components/ui/Email";
import Phone from "@/components/ui/PhoneNumber";
import { footerData, routesData } from "@/data";
import LinkButton from "@/components/ui/LinkButton";

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 bg-darkBrown bg-opacity-20 border-t-2 border-primary">
      <div className="container ">
        <div className="flex flex-col items-center gap-8 md:flex-row justify-around  mb-4">
          <LinkButton href={routesData.Policy}>{footerData.policy}</LinkButton>
          <p className="text-xs">{footerData.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
