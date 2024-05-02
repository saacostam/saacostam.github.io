import { ReactNode } from "react"
import { SearchIcon } from "../../icons";

interface NavBarOptions{
    navbarStart: ReactNode;
}

export const NavBar = ({
    navbarStart,
}: NavBarOptions) => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    { navbarStart }
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">saacostam</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <SearchIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}
