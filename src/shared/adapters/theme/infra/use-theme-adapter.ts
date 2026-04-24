import { useMantineColorScheme } from "@mantine/core";
import { useEffect, useMemo } from "react";
import { type IThemeAdapter, IThemeVariant } from "../domain";

export function useThemeAdapterImpl(): IThemeAdapter {
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	const theme =
		colorScheme === "light" ? IThemeVariant.LIGHT : IThemeVariant.DARK;

	useEffect(() => {
		if (theme === IThemeVariant.DARK) {
			setColorScheme("dark");
		} else {
			setColorScheme("light");
		}
	}, [setColorScheme, theme]);

	return useMemo(
		() => ({ theme, setTheme: setColorScheme }),
		[theme, setColorScheme],
	);
}
