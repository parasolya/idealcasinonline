"use client";

import ScrollButton from "@/components/ui/ScrollButton";
import { heroData } from "@/data";
import Image from "next/image";

const Hero = () => {
  return (
    <section id={heroData.id} className="pt-[230px] pb-26">
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-8 lg:gap-20">
          <div className="w-full relative h-[220px] lg:h-[360px] overflow-hidden md:w-1/2 shadow-lg shadow-slate-600/50">
            <Image
              className="object-cover"
              fill
              src="/hero/hero.jpg"
              alt="Het Landgoed Zilverhof"
              sizes="600px"
              priority
            />
          </div>
          <h1 className="lg:w-1/2 font-thin text-[24px] lg:text-[40px] text-center lg:text-left tracking-tight leading-none uppercase">
            {heroData.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
