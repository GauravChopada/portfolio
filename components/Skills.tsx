import { skillsData } from "@/utils/data/strings";
import TechCard from "./TechCard";
// import SkillCard from "./SkillCard";
// import { convertToSubarrays } from "@/utils/helpers";

const Skills = () => {
  return (
    <section id="skills" className="w-full px-10 xl:px-16 pt-40 flex flex-col items-start justify-start">

      <div className="font-black mb-10 text-4xl text-zinc-200">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {Object.keys(skillsData).map((key, index) => (
          <TechCard
            key={index}
            title={key}
            tech={skillsData[key]}
          />
        ))
        }
      </div>

      {/* <div className="text-6xl font-black mb-32">Key Skills</div> */}
      {/* <div className="grid grid-cols-2 xl:grid-cols-6 gap-6">
        {skillsData.map((skillObject, index) => (
          <SkillCard
            key={index}
            image={skillObject.image}
            title={skillObject.title}
            subtitle={skillObject.subtitle}
          />
        ))}
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {formattedSkillsData.map((threeSkillsArray) => (
          <div className="grid gap-4">
            {threeSkillsArray.map((skillObject) => (
              //   <div>
              <SkillCard
                image={skillObject.image}
                title={skillObject.title}
                subtitle={skillObject.subtitle}
              />
              //   </div>
            ))}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Skills;
