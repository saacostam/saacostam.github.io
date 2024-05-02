import { ReactNode } from "react"

import { SearchIcon } from "../../icons";
import { RoutePath } from "../../router";

interface NavBarOptions{
    navbarStart: ReactNode;
}

export const NavBar = ({
    navbarStart,
}: NavBarOptions) => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    { navbarStart }
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl text-primary" href={RoutePath.homePage}>saacostam</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <SearchIcon className="text-primary"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
