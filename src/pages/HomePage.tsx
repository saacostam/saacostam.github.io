import { ScrollRestoration } from "react-router-dom";
import { Hero } from "../modules/core";
import { TopProjects } from "../modules/projects";

export function HomePage() {
  return (
    <>
      <Hero className="mb-8" />
      <TopProjects />
      <ScrollRestoration />
    </>
  );
}
