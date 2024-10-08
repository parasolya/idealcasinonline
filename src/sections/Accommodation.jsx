import Image from "next/image";

import Title from "@/components/ui/Title";
import { accommodationData } from "@/data";

const Accommodation = () => {
  return (
    <section id={accommodationData.id} className="section font-extralight">
      <div className="container flex flex-col justify-center items-center">
        <Title title={accommodationData.title} />
        <div className="flex flex-col gap-8 items-center text-center mb-8 lg:mb-20">
          <p>{accommodationData.description1.text}</p>
          <p>{accommodationData.description2.text}</p>
        </div>

        <ul className="w-full grid  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accommodationData.img.map(({ id, src, alt }) => (
            <li key={id}>
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  className="object-cover"
                  fill
                  src={src}
                  alt={alt}
                  sizes="300px"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Accommodation;
