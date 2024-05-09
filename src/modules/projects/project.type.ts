import { ReactNode } from "react";
import { SkillEnum } from "../skills";
import { TagEnum } from "../tags";

export type ProjectNavigation =
  | {
      type: "component";
      component: ReactNode;
    }
  | {
      type: "external";
      href: string;
      height?: number;
    };

export interface Project {
  id: string;
  name: string;
  rating: number;
  navigation: ProjectNavigation;
  description: ReactNode;
  longDescription: ReactNode;

  responsive: boolean;
  imgSrc?: string;

  tags: TagEnum[];
  skills: SkillEnum[];
}
