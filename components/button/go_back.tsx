import { StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from "expo-router";

import { useStyles, useTheme } from "@hooks";
import { Icon, Text } from "@components/text";
import { HEADER_ICON_SIZE } from "@utils";

export const GoBackButton = () => {
	const router = useRouter();
	const theme = useTheme();
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {

			},
		});
	});

	function handleGoBack() {
		router.back();
	}

	return (
		<TouchableOpacity onPress={handleGoBack}>
			<Icon name='arrow-back-ios' size={HEADER_ICON_SIZE} color={theme.icons.dark_contrast} />
		</TouchableOpacity>
	)
}