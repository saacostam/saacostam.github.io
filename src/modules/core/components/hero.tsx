import { Link } from "react-router-dom";
import {
  PROJECT_CATEGORIES,
  mapCategoryToIcon,
  mapCategoryToLabel,
} from "../../../modules/projects";
import { RoutePath } from "../../../modules/router";
import { ClickIcon } from "../../../modules/icons";

export function Hero() {
  return (
    <section className="bg-base-200 rounded-2xl p-8 flex flex-col justify-center">
      <div className="avatar mb-4 flex justify-center">
        <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
          <img
            src="https://github.com/saacostam.png"
            alt="saacostam"
            width={128}
            height={128}
          />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-primary text-center">saacostam</h1>
      <h2 className="text-lg font-bold text-center mb-8">
        Full Stack Software Engineer
      </h2>
      <Link
        to={RoutePath.projectsPage}
        className="btn btn-primary btn-lg w-72 mx-auto"
      >
        <ClickIcon /> Check My Projects
      </Link>

      <div className="divider divider-primary my-8">
        <h4 className="text-xl font-bold text-center">Topics that I enjoy!</h4>
      </div>

      <div className="flex flex-wrap justify-center">
        {PROJECT_CATEGORIES.map((category) => (
          <Link
            to={`${RoutePath.projectsPage}?category=${category}`}
            className="btn btn-primary btn-lg btn-outline w-72 mx-2 mb-2"
          >
            {mapCategoryToIcon.has(category) && mapCategoryToIcon.get(category)}
            {mapCategoryToLabel.get(category) || category}
          </Link>
        ))}
      </div>
    </section>
  );
}
