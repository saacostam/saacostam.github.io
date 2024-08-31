import { GithubIcon, RocketIcon } from "../../icons";
import { GITHUB_PROFILE } from "../data";

export function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10">
      <aside>
        <RocketIcon />
        <p className="text-primary font-bold text-2xl">saacostam</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            aria-label="Check my Github Profile"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
