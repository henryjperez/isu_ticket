import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text, Header, FlashMessage } from "@components";

export default function Layout() {
	return (
		<SafeAreaProvider>
			<FlashMessage />
			<Stack screenOptions={{ header: (navProps) => <Header /> }} />
		</SafeAreaProvider>
	)
}