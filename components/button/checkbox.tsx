import { Checkbox as ExpoCheckbox, CheckboxProps as ExpoCheckboxProps } from "expo-checkbox";

import { useTheme } from "@hooks";

export interface CheckboxProps {
	color?: string;
	onChange?: ExpoCheckboxProps["onChange"];
	value?: ExpoCheckboxProps["value"];
	size?: number
}
export const Checkbox = (props: CheckboxProps) => {
	const theme = useTheme();

	return (
		<ExpoCheckbox
			color={props.color ?? theme.colors.primary}
			accessibilityRole="checkbox"
			style={{
				width: props.size ?? 30,
				height: props.size ?? 30,
				borderRadius: 5,
			}}
			onValueChange={props.onChange}
			value={props.value}
			
		/>
	);
}
