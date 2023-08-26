import SkillCard from "./SkillCard";
import { skillsData } from "@/utils/data/strings";
import { convertToSubarrays } from "@/utils/helpers";

const Skills = () => {
  //   const formattedSkillsData = convertToSubarrays(skillsData);
  return (
    <div className="h-screen w-screen px-16 py-40 flex flex-col items-start justify-start">
      <div className="text-6xl font-black mb-32">Key Skills</div>
      <div className="flex flex-row flex-wrap justify-start items-center gap-6">
        {skillsData.map((skillObject) => (
          <SkillCard
            image={skillObject.image}
            title={skillObject.title}
            subtitle={skillObject.subtitle}
          />
        ))}
      </div>

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
    </div>
  );
};

export default Skills;
