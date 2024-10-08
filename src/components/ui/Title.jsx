import clsx from "clsx";


const Title = ({ title,  titleClassName }) => {
  return (
    <>
      <h1 className={clsx("font-thin text-[32px] lg:text-[40px] tracking-tight leading-none uppercase", titleClassName)}>
        {title}
      </h1>
    </>
  );
};

export default Title;
