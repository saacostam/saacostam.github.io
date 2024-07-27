import { SkillEnum } from "./types";
import { Skill } from "./skill";
import { Color } from "../style-props";

interface SkillsProps {
  skills: SkillEnum[];
  className?: string;
  color?: Color;
}

export function Skills({ skills, className, color }: SkillsProps) {
  return (
    <div className={className}>
      {skills
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((skill) => (
          <Skill skill={skill} key={skill} color={color} />
        ))}
    </div>
  );
}
