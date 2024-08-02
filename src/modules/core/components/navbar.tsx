import { ReactNode } from "react";

import { GITHUB_PROFILE } from "../data";
import { GithubIcon, CommandLineIcon } from "../../icons";
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
          <a
            href={GITHUB_PROFILE}
            className="btn btn-ghost"
            aria-label="search"
            target="_blank"
          >
            <span className="hidden md:block font-semibold">My GitHub</span>
            <span className="block md:hidden font-semibold">GH</span>
            <GithubIcon className="w-8 h-8 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
