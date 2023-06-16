import { StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from "expo-router";

import { useStyles, useTheme } from "@hooks";
import { Icon, Text } from "@components/text";

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
			<Icon name='arrow-back-ios' size={30} color={theme.icons.dark_contrast} />
		</TouchableOpacity>
	)
}