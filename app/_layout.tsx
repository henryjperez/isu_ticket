import { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Stack, ErrorBoundary, SplashScreen, useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text, Header, FlashMessage, Menu, MenuOption, MenuTrigger, GoBackButton } from "@components";
import { useTheme } from "@hooks";

export default function Layout() {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const [loaded, error] = useFonts({
		nunito: require('../assets/fonts/Nunito-Medium.ttf'),
		...FontAwesome.font,
	});
	// const theme = useTheme();
	const routes = [
		{
			path: "dashboard",
			name: "Dashboard",
		},
		{
			path: "work",
			name: "Work Ticket",
		},
		{
			path: "directions",
			name: "Get Directions",
		},
	];
	function navigateHandler(path: string) {
		router.push(path);
		// setShowMenu(false);
	}

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	if (!loaded) {
		return <SplashScreen />
	}

	return (
		<TouchableWithoutFeedback onPress={() => {
			if (showMenu) {
				setShowMenu(false);
			}
		}}>
		<SafeAreaProvider>
			<FlashMessage />
			<Stack screenOptions={{ header: (navProps) => {
				return (
					<Header
						title={navProps.route.name}
						rightMenu={() => {
							return (
								<>
									{
										navProps.route.name !== "login" &&
										navProps.route.name !== "register" &&
										<MenuTrigger onPress={() => setShowMenu(!showMenu)} />
									}
									{showMenu && (
										<Menu>
											{/* @ts-ignore */}
											{
												routes.map((route, index) => {
													if (route.path == navProps.route.name) {
														return null;
													}
													return (
														<MenuOption
															onPress={() => navigateHandler(route.path)}
															key={`${route.name}-${route.path}-${index}`}
														>
															{route.name}
														</MenuOption>
													);
												})
											}
										</Menu>
									)}
								</>
							);
						}}
						leftMenu={() => {
							return <GoBackButton />
						}}
					/>
				);
			} }}>
				<Stack.Screen name="index" options={{ headerShown: false }} />
			</Stack>
		</SafeAreaProvider>
		</TouchableWithoutFeedback>
	)
}