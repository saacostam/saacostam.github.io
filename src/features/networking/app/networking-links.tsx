import { GithubIcon, LinkedInIcon } from "@/shared/icons";

export const GITHUB_LINK = "https://github.com/saacostam";
export const LINKEDIN_LINK =
	"https://www.linkedin.com/in/santiago-acosta-meza/?locale=en-US";

export const NETWORKING_LINKS = [
	{
		icon: <GithubIcon />,
		href: GITHUB_LINK,
	},
	{
		icon: <LinkedInIcon />,
		href: LINKEDIN_LINK,
	},
] as const;
