import clsx from "clsx";


const Title = ({ title,  titleClassName }) => {
  return (
    <>
      <h1 className={clsx("font-thin text-[40px] md:text-[67px] lg:text-[98px] tracking-tight leading-none uppercase", titleClassName)}>
        {title}
      </h1>
    </>
  );
};

export default Title;
