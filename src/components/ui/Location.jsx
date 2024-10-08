import { contactsData } from "@/data";
import LocationIcon from "/public/contacts/location.svg";
import clsx from "clsx";

const Location = ({ iconClassName, locationClassName }) => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
    <LocationIcon
      className={iconClassName}
      width={32}
      height={32}
    />

    <div className="text-[16px] leading-[1.30]">
      <p className={clsx(
          "transition hover:text-primary focus:text-primary",
          locationClassName
        )}
      >
        {contactsData.location}
      </p>
    </div>
  </div>
  )
}

export default Location
