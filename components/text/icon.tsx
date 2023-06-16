import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];
export type FontAwesomeName = React.ComponentProps<typeof FontAwesome>['name'];
export type IconFamily = "material" | "fw";
export type IconName = MaterialIconName | FontAwesomeName;

export interface IconProps {
	name: IconName;
	family?: IconFamily;
	size: number;
	color?: string;
}


export const Icon = (props: IconProps) => {
	const { family = "material", size = 25, name, color = "#000" } = props;

	if (family === "material") {
		return <MaterialIcons name={name as MaterialIconName} size={size} color={color} />
	}

	if (family === "fw") {
		return <FontAwesome name={name as FontAwesomeName} size={size} color={color} />
	}

	return null;
}