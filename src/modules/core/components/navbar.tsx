import { useMemo } from "react";
import { GITHUB_PROFILE } from "../data";
import { GithubIcon, CommandLineIcon, Bars3Icon } from "../../icons";
import { RoutePath } from "../../router";

const NAV_OPTIONS = [
  {
    path: RoutePath.homePage,
    label: "Home",
  },
  {
    path: `/#${RoutePath.projectsPage}`,
    label: "Projects",
  },
];

export function NavBar() {
  const navOptions = useMemo(() => {
    return NAV_OPTIONS.map(({ path, label }) => (
      <li>
        <a href={path} className="font-semibold">
          {label}
        </a>
      </li>
    ));
  }, []);

  return (
    <div className="navbar bg-base-200 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars3Icon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a
          className="btn btn-ghost text-2xl flex justify-center text-primary font-medium"
          href={RoutePath.homePage}
        >
          <CommandLineIcon className="w-6 h-6" /> saacostam
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a href={GITHUB_PROFILE} className="btn btn-ghost" target="_blank">
          <span className="hidden md:block font-semibold">My GitHub</span>
          <span className="block md:hidden font-semibold">GH</span>
          <GithubIcon className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  );
}
