import ContactsForm from "@/components/common/ContactsForm/ContactsForm";
import Email from "@/components/ui/Email";
import Location from "@/components/ui/Location";
import Map from "@/components/ui/Map";
import Phone from "@/components/ui/PhoneNumber";
import Title from "@/components/ui/Title";
import { navDataLink } from "@/data";
import React from "react";

const Contacts = () => {
  return (
    <section className="pt-[200px] pb-26">
      <div className="container flex flex-col justify-center items-center">
        <Title title="Contacten" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12 lg:mb-16">
          <div className="flex flex-col gap-4 mb-8">
            <Location locationClassName="font-light" iconClassName="h-8 w-8" />
            <Email mailClassName="font-light" iconClassName="h-8 w-8" />

            <Phone
              phoneClassName="font-light xl:text-l"
              iconClassName="h-8 w-8"
            />
          </div>
          <ContactsForm />
        </div>
        <div className="w-full md:w-1/3 h-60">
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.720722748924!2d4.986006315767676!3d52.12145297973947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6705658d5c745%3A0x87d27ff36625ecd8!2sKasteel%20de%20Haar!5e0!3m2!1sen!2snl!4v1696764859726!5m2!1sen!2snl" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
