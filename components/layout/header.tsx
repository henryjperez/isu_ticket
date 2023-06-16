import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import { GoBackButton } from "@components";

export const Header = () => {
	return (
		<SafeAreaView>
			<GoBackButton />
			<Text>Header</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({});