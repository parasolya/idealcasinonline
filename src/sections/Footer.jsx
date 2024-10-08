import Logo from "@/components/ui/Logo";
import Email from "@/components/ui/Email";
import Phone from "@/components/ui/PhoneNumber";
import { footerData, routes } from "@/data";
import LinkButton from "@/components/ui/LinkButton";


const Footer = () => {
  return (
    <footer className="pt-8 pb-4 bg-brown bg-opacity-20">
      <div className="container">
      <div className="flex justify-between border-b-2 border-primary mb-4">
        <Logo />
        
        <div className="flex flex-col gap-4 mb-8">
          <Email mailClassName="font-light" iconClassName="h-8 w-8" />

          <Phone
            phoneClassName="font-light xl:text-l"
            iconClassName="h-8 w-8"
          />
        </div>
      </div>
      <div className="flex justify-around text-titleBrown">
        <LinkButton href={routes.Policy}>{footerData.policy}</LinkButton>
        <p className="text-xs">{footerData.cookie}</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
