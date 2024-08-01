import { FilterIcon } from "../../icons";
import {
  ProjectCategory,
  ProjectCategoryFilter,
  useProjectFilterUrl,
} from "../../projects";

const HERO_FILTERS = [
  {
    category: ProjectCategory.SoftwareEngineering,
    Icon: <FilterIcon />,
    color: "primary",
  },
  {
    category: ProjectCategory.MusicSoftware,
    Icon: <FilterIcon />,
    color: "primary",
  },
  {
    category: ProjectCategory.Games,
    Icon: <FilterIcon />,
    color: "primary",
  },
];

export function Hero() {
  const { state, addCategoryToFilter, removeCategoryToFilter } =
    useProjectFilterUrl();

  return (
    <div className="hero bg-base-200 py-8 mb-8 rounded-3xl">
      <div className="hero-content text-center">
        <div className="max-w-md relative">
          <h1 className="text-5xl font-bold text-primary mb-2">saacostam</h1>
          <h2 className="text-lg font-bold mb-4">
            Full Stack Software Engineer
          </h2>
          <div className="py-3 text-2xl font-semibold flex flex-col">
            {HERO_FILTERS.map(({ category, color, Icon }, index, filters) => (
              <ProjectCategoryFilter
                icon={Icon}
                state={state}
                key={category}
                color={color}
                category={category}
                onApplyFilterLink={addCategoryToFilter(category)}
                onRemoveFilterLink={removeCategoryToFilter(category)}
                className={index !== filters.length - 1 ? "mb-2" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
