"use client";

import ScrollButton from "@/components/ui/ScrollButton";
import { heroData } from "@/data";

const Hero = () => {
  return (
    <section id={heroData.id} className="pt-[230px] pb-26">
      <div className="container">
        <div className="lg:flex justify-between lg:gap-[24px]">
          <div className="md:w-2/3 lg:w-[628px] flex-col justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="font-thin text-[38px] lg:text-[48px] tracking-tight leading-none uppercase">
                Parc Broekhuizen met casino speelkamer l Culinair landgoed
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
