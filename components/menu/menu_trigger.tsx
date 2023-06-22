import { StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from "@components/text/icon";
import { useStyles, useTheme } from "@hooks";
import { HEADER_ICON_SIZE } from "@utils";

export interface MenuTriggerProps {
	onPress: () => void;
}
export const MenuTrigger = (props: MenuTriggerProps) => {
	const theme = useTheme();
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {

			},
		});
	});

	return (
		<TouchableOpacity onPress={props.onPress}>
			<Icon name='menu' size={HEADER_ICON_SIZE} color={theme.icons.dark_contrast} />
		</TouchableOpacity>
	)
}