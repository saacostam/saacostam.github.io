import { Project } from ".";
import { SkillEnum } from "../skills";
import { TagEnum } from "../tags";

interface ProjectRepositoryGetOptions {
  ids?: string[];
  name?: string;
  tags?: TagEnum[];
  skills?: SkillEnum[];
}

export class ProjectRepository {
  constructor(private _all: Project[]) {}

  public get(options?: ProjectRepositoryGetOptions): Project[] {
    const _ids = options?.ids ?? [];
    const _name = options?.name ?? "";
    const _tags = options?.tags ?? [];
    const _skills = options?.skills ?? [];

    let res = this._all.map((_) => _);

    if (_ids && _ids.length > 0)
      res = res.filter((project) => _ids.includes(project.id));

    if (_name) res = res.filter((project) => project.name.search(_name) !== -1);

    if (_tags && _tags.length > 0)
      res = res.filter((project) =>
        project.tags.some((pTag) => _tags.includes(pTag)),
      );
    if (_skills && _skills.length > 0)
      res = res.filter((project) =>
        project.skills.some((pSkill) => _skills.includes(pSkill)),
      );

    return res;
  }

  public getById(id: string | undefined): Project | undefined {
    if (!id) return undefined;
    return this._all.find((project) => project.id === id);
  }
}
