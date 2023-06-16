import { useColorScheme } from "react-native";
import { colors } from "@utils/colors";

export const useTheme = () => {
	const colorScheme = useColorScheme() ?? "light";
	return colors[colorScheme];
};