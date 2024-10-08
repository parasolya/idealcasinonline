import clsx from "clsx";


const Title = ({ title,  titleClassName }) => {
  return (
    <>
      <h1 className={clsx("font-thin text-[40px] md:text-[67px] lg:text-[98px] tracking-tight leading-none mb-12 lg:mb-16 text-center uppercase", titleClassName)}>
        {title}
      </h1>
    </>
  );
};

export default Title;
