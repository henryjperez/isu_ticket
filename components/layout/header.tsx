import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import { GoBackButton } from "@components/button";
import { Menu } from "@components/menu";

export const Header = () => {
	return (
		<SafeAreaView>
			<GoBackButton />
			<Text>Header</Text>
			<Menu />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({});