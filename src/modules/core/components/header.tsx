import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { Size, HeaderLevel, Color } from "../../style-props";

export interface HeaderProps {
  headerLevel: HeaderLevel;

  className?: string;
  color?: Color;
  size?: Size;
}

export const Header = ({
  headerLevel,

  className: _className,
  color: _color,
  size: _size,

  children,
}: PropsWithChildren<HeaderProps>) => {
  const size = _size ?? "md";
  const textColor: Color = _color ?? "primary";
  const className = twMerge(
    `text-${size} text-${textColor} font-semibold`,
    _className,
  );

  switch (headerLevel) {
    case 1:
      return <h1 className={className}>{children}</h1>;
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    case 4:
      return <h4 className={className}>{children}</h4>;
    case 5:
      return <h5 className={className}>{children}</h5>;
    case 6:
      return <h6 className={className}>{children}</h6>;
  }
};
