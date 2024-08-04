import { Link } from "react-router-dom";
import { SearchIcon, XIcon } from "../../icons";
import { ResetFilter } from "../hooks";

export interface EmptySearchProps {
  resetFilter: ResetFilter;
}

export function EmptySearch({ resetFilter }: EmptySearchProps) {
  return (
    <section className="bg-base-200 pt-16 pb-12 mb-8 rounded-3xl flex flex-col items-center">
      <SearchIcon className="text-white w-48 h-48 mb-4 bg-secondary p-8 rounded-full" />
      <h3 className="text-secondary font-semibold text-3xl mb-2">
        No results found!
      </h3>
      <p className="mb-4">Adjust your filters and try again.</p>
      <Link to={resetFilter()} className="btn btn-secondary btn-outline w-64">
        <XIcon /> Reset filters
      </Link>
    </section>
  );
}
