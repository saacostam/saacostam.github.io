import { PropsWithChildren, useMemo } from "react";
import { getDrawer } from "./drawer";
import { NavBar } from ".";
import { Bars3Icon } from "../../icons";

export const Layout = ({ children }: PropsWithChildren) => {
  const { Drawer, Activator } = useMemo(
    () =>
      getDrawer({
        id: "main-drawer",
        activator: {
          className: "btn-neutral text-primary",
          children: <Bars3Icon className="w-6 h-6" />,
        },
      }),
    [],
  );

  return (
    <Drawer>
      <NavBar navbarStart={<Activator />} />
      <main className="m-4 rounded-2xl p-4 max-w-7xl mx-auto">{children}</main>
    </Drawer>
  );
};
