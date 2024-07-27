import { ReactNode } from "react";

import { SearchIcon, CommandLineIcon } from "../../icons";
import { RoutePath } from "../../router";

interface NavBarOptions {
  navbarStart: ReactNode;
}

export function NavBar({ navbarStart }: NavBarOptions) {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">{navbarStart}</div>
        <div className="navbar-center">
          <a
            className="btn btn-ghost text-2xl flex justify-center text-primary font-medium"
            href={RoutePath.homePage}
          >
            <CommandLineIcon className="w-6 h-6" /> saacostam
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle" aria-label="search">
            <SearchIcon className="text-primary w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
