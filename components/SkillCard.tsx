import Image from "next/image";

const SkillCard = ({ image, title, subtitle }: any) => {
  return (
    <div className="p-5 border-2 flex justify-center flex-auto border-slate-800 border-solid rounded-xl bg-gray-950 hover:scale-110 duration-300">
      <Image src={image} alt="Amazon web Service" className="h-40 w-fit" />
      {/* <div className="text-3xl font-medium mb-1">{title}</div>
      <div className="hidden group-hover:block text-l font-light max-w-md text-slate-400 transition-all ease-in-out duration-1000">
        {subtitle}
      </div> */}
    </div>
  );
};

export default SkillCard;
