import Image from "next/image";
import AWSBadge from "../utils/images/AWS_SOLUTION_ARCHITECT_BADGE.png"
import styles from "../styles/achievements.module.css"


const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen w-screen px-16 py-40 flex flex-col items-start justify-start ">
      <div className="text-6xl font-black mb-32">Hall of Fame</div>
      <div className="flex flex-row flex-wrap justify-start items-center gap-6 border-slate-800 border-solid border-[1px] rounded-xl p-4">
        <Image className="h-48 w-48" src={AWSBadge} alt="AWS Solution Architect Associate" />
      </div>
    </section>
  );
};

export default Achievements;
