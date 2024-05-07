import { SkillEnum } from "./types";

export interface SkillProps {
  skill: SkillEnum;
}

export const Skill = ({ skill }: SkillProps) => (
  <div className="badge badge-secondary text-secondary-content mr-2">
    {skill}
  </div>
);
