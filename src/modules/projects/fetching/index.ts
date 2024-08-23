import { FETCH_STATIC_DATA } from "../../constants";
import { LeanProject, ProjectDto } from "../types";

const GET_ALL_LEAN_PROJECTS_DEFAULT_ERROR = `Error fetching projects preview. Please try again later!`;

export async function getAllLeanProjects(): Promise<LeanProject[]> {
  try {
    const response = await fetch(`${FETCH_STATIC_DATA}/projects/lean.json`);
    if (!response.ok) throw new Error(GET_ALL_LEAN_PROJECTS_DEFAULT_ERROR);
    return response.json();
  } catch (e) {
    console.error(e);
    throw new Error(GET_ALL_LEAN_PROJECTS_DEFAULT_ERROR);
  }
}

interface GetProjectByIdOptions {
  id: string;
}

const GET_PROJECT_BY_ID_DEFAULT_ERROR =
  "Error fetching project. Please try again later!";

export async function getProjectById({
  id,
}: GetProjectByIdOptions): Promise<ProjectDto> {
  try {
    const response = await fetch(`${FETCH_STATIC_DATA}/project/${id}.json`);
    if (!response.ok) throw new Error(GET_PROJECT_BY_ID_DEFAULT_ERROR);
    return response.json();
  } catch (e) {
    console.error(e);
    throw new Error(GET_PROJECT_BY_ID_DEFAULT_ERROR);
  }
}

const GET_TOP_PROJECT_DEFAULT_ERROR =
  "Error fetching top projects. Please try again later!";

export async function getTopProjects(): Promise<LeanProject[]> {
  try {
    const response = await fetch(`${FETCH_STATIC_DATA}/projects/top.json`);
    if (!response.ok) throw new Error(GET_TOP_PROJECT_DEFAULT_ERROR);
    return response.json();
  } catch (e) {
    console.error(e);
    throw new Error(GET_TOP_PROJECT_DEFAULT_ERROR);
  }
}
