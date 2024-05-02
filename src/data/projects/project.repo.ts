import { Project } from ".";
import { SkillEnum, TagEnum } from "../core";

interface ProjectRepositoryGetOptions{
    ids?: string[];
    name?: string;
    tags?: TagEnum[];
    skills?: SkillEnum[];
}

class ProjectRepository{
    constructor(private _all: Project[]){}

    public get({
        ids,
        name,
        tags,
        skills,
    }: ProjectRepositoryGetOptions): Project[]{
        const _ids = ids ?? [];
        const _name = name ?? "";
        const _tags = tags;
        const _skills = skills;

        let res = this._all.map(_ => _);

        if (_ids && _ids.length > 0) res = res.filter((project) => _ids.includes(project.id));

        if (_name) res = res.filter(project => project.name.search(_name) !== -1);

        if (_tags && _tags.length > 0) res = res.filter((project) => project.tags.some(pTag => _tags.includes(pTag)));
        if (_skills && _skills.length > 0) res = res.filter((project) => project.skills.some(pSkill => _skills.includes(pSkill)));

        return res;
    }

    public getById(id: string): Project | undefined{
        return this._all.find(project => project.id === id);
    }
}
