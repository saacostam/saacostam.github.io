import { twMerge } from "tailwind-merge";
import { IconProps } from "../icon.type";

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("size-4", className)}
      aria-label="Chevron Right Icon"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
