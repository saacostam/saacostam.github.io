import { twMerge } from "tailwind-merge";

import { Color } from "../style-props";
import { SkillEnum } from "./types";

export interface SkillProps {
  skill: SkillEnum;
  color?: Color;
}

export const Skill = ({ skill, color: _color }: SkillProps) => {
  const color: Color = _color || "secondary";

  return (
    <div
      className={twMerge("badge mr-2", `badge-${color} text-${color}-content`)}
    >
      {skill}
    </div>
  );
};
