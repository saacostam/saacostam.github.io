import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DrawerFactoryProps {
  id: string;
  activator: {
    children: ReactNode;
    className?: string;
  };
}

interface DrawerProps {}

export function getDrawer({
  id,
  activator: { className, children },
}: DrawerFactoryProps) {
  const Activator: FunctionComponent = () => (
    <label
      htmlFor={id}
      className={twMerge("btn btn-ghost drawer-button", className)}
    >
      {children}
    </label>
  );

  const Drawer: FunctionComponent<PropsWithChildren<DrawerProps>> = ({
    children,
  }) => {
    return (
      <div className="drawer">
        <input id={id} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor={id}
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content ">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return {
    Activator,
    Drawer,
  };
}
