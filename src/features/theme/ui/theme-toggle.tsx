import { ActionIcon } from "@mantine/core";
import { useCallback } from "react";
import { useAdapters } from "@/shared/adapters/core/app";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import { MoonIcon, SunIcon } from "@/shared/icons";

const iconProps = {
	style: {
		height: "70%",
		width: "70%",
	},
};

export function ThemeToggle() {
	const { themeAdapter } = useAdapters();

	const toggleTheme = useCallback(() => {
		themeAdapter.setTheme(
			themeAdapter.theme === IThemeVariant.DARK
				? IThemeVariant.LIGHT
				: IThemeVariant.DARK,
		);
	}, [themeAdapter.setTheme, themeAdapter.theme]);

	return (
		<ActionIcon color="base" onClick={toggleTheme} size="lg" variant="outline">
			{themeAdapter.theme === IThemeVariant.DARK ? (
				<SunIcon {...iconProps} />
			) : (
				<MoonIcon {...iconProps} />
			)}
		</ActionIcon>
	);
}
