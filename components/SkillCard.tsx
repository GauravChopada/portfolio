import Image from "next/image";

const SkillCard = ({ image, title, subtitle }: any) => {
  return (
    <div className="w-56 p-5 border-[1px] flex flex-col gap-3 justify-center items-center flex-auto border-slate-800 border-solid rounded-xl bg-gray-950 hover:scale-110 duration-300">
      <Image src={image} alt="Amazon web Service" className="h-40 w-full pb-5 border-slate-800 border-b-[1px]" />
      <div className="text-3xl font-medium mb-1 text-slate-700">{title}</div>
      {/* <div className="hidden group-hover:block text-l font-light max-w-md text-slate-400 transition-all ease-in-out duration-1000">
        {subtitle}
      </div> */}
    </div>
  );
};

export default SkillCard;
