import { PropsWithChildren, useMemo } from "react";
import { getDrawer } from "./drawer";
import { NavBar } from ".";
import { Bars3Icon } from "../../icons";

export const Layout = ({
    children,
}: PropsWithChildren) => {
    const {
        Drawer,
        Activator,
    } = useMemo(() => (
        getDrawer({
            id: 'main-drawer',
            activator: {
                className: 'btn-neutral',
                children: <Bars3Icon/>,
            }
        })
    ), []);

    return (
        <Drawer>
            <NavBar
                navbarStart={<Activator/>}
            />
            <main className="m-4">
                { children }
            </main>
        </Drawer>
    )
}
