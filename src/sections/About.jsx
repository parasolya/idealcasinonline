import Title from "@/components/ui/Title";
import { aboutData } from "@/data";

const About = () => {
  return (
    <section
      id={aboutData.id}
      className="section font-extralight bg-about bg-brown"
    >
      <div className="container">
        <div className="md:w-2/3 lg:w-[628px] md:flex flex-col justify-between mb-4 md:mb-0">
          <Title title={aboutData.title} />
        </div>
        <div className="w-[180px] md:w-[218px] lg:w-1/2 lg:mb-[72px]">
          <div className="lg:w-1/2 space-y-5 md:space-y-4">
            <p className="font-extralight">{aboutData.description1.text}</p>
            <p className="font-extralight">{aboutData.description2.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
