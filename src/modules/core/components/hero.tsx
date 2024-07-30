import { twMerge } from "tailwind-merge";
import { FilterIcon, FireIcon } from "../../icons";
import { useProjectFilterUrl } from "../../projects";
import { Link } from "react-router-dom";

// TODO: Read name from enum
const HERO_FILTERS = [
  {
    name: "Software Engineering",
    Icon: <FilterIcon />,
    color: "primary",
  },
  {
    name: "Music Software",
    Icon: <FilterIcon />,
    color: "primary",
  },
  {
    name: "Games",
    Icon: <FilterIcon />,
    color: "primary",
  },
  {
    name: "Random",
    Icon: <FireIcon />,
    color: "secondary",
  },
];

export function Hero() {
  const { state, updateFilter } = useProjectFilterUrl();

  return (
    <div className="hero bg-base-200 py-8 mb-8 rounded-3xl">
      <div className="hero-content text-center">
        <div className="max-w-md relative">
          <h1 className="text-5xl font-bold text-primary mb-2">saacostam</h1>
          <h2 className="text-lg font-bold mb-4">
            Full Stack Software Engineer
          </h2>
          <div className="py-3 text-2xl font-semibold flex flex-col">
            {HERO_FILTERS.map((filter, index, filters) => (
              <Link
                key={filter.name}
                to={updateFilter((prevState) => ({
                  ...prevState,
                  categories: [...prevState.categories, filter.name],
                }))}
                className={twMerge(
                  "btn",
                  `btn-${filter.color}`,
                  index !== filters.length - 1 ? "mb-2" : "",
                  !state.categories.includes(filter.name) ? `btn-outline` : "",
                )}
              >
                {filter.Icon} {filter.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
