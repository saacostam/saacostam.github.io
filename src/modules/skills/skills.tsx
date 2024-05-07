import { twMerge } from "tailwind-merge";
import { BoltIcon } from "../icons";
import { SkillEnum } from "./types";
import { Skill } from "./skill";

interface SkillsProps {
  skills: SkillEnum[];
  className?: string;
}

export const Skills = ({ skills, className }: SkillsProps) => {
  return (
    <section
      className={twMerge("collapse collapse-arrow bg-base-200", className)}
    >
      <input type="checkbox" />
      <h3 className="collapse-title text-secondary text-xl flex items-center">
        <BoltIcon className="w-6 h-6 mr-2" /> Skills
      </h3>
      <div className="collapse-content flex flex-wrap">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </div>
    </section>
  );
};
