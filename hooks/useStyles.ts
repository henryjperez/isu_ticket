import { StyleSheet } from "react-native";
import { useTheme } from "./useTheme";
import { useOrientation } from "./useOrientation";

type StyleReturn<T extends StyleSheet.NamedStyles<T>> = ReturnType<typeof StyleSheet.create<T>>
type ThemeType = ReturnType<typeof useTheme>
type OrientationType = ReturnType<typeof useOrientation>
type StylesType<T extends StyleSheet.NamedStyles<T>> = (theme: ThemeType, device: OrientationType) => StyleReturn<T>;

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(styleFunction: StylesType<T>) => {
	const theme = useTheme();
	const device = useOrientation();

	return styleFunction(theme, device);
}