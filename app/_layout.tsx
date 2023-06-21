import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Stack, ErrorBoundary, SplashScreen, useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text, Header, Menu, MenuOption, MenuTrigger, GoBackButton, Icon, Calendar } from "@components";
import { useTheme } from "@hooks";

export default function Layout() {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const theme = useTheme();
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
			<Stack screenOptions={{ header: (navProps) => {
				return (
					<Header
						title={navProps.route.name}
						rightMenu={() => {
							return (
								<React.Fragment>
									{
										navProps.route.name === "dashboard" ? (
											<TouchableOpacity onPress={() => navigateHandler("new_ticket")} style={{marginHorizontal: 5}}>
												<Icon family="fw" name="plus" size={30} color={theme.icons.dark_contrast} />
											</TouchableOpacity>
										) : null
									}
									{
										navProps.route.name !== "login" &&
										navProps.route.name !== "register" &&
										navProps.route.name !== "new_ticket" &&
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
								</React.Fragment>
							);
						}}
						leftMenu={() => {
							return (
								<React.Fragment>
									<GoBackButton />
									<Calendar />
								</React.Fragment>
							)
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