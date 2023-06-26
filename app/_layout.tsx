import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, TouchableOpacity, View } from "react-native";
import { Stack, SplashScreen, useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
	Text,
	Header,
	Menu,
	MenuOption,
	MenuTrigger,
	GoBackButton,
	Icon,
	Calendar,
	Auth,
	CustomOptionsSection,
	FlashMessageWrapper } from "@components";
import { HEADER_ICON_SIZE, routes } from "@utils";
import { Provider } from "@store";
import { useTheme } from "@hooks";


export default function Layout() {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const theme = useTheme();
	const [loaded, error] = useFonts({
		nunito: require('../assets/fonts/Nunito-Medium.ttf'),
		...FontAwesome.font,
	});
	
	function navigateHandler(path: string) {
		router.push(path);
		setShowMenu(false);
	}

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	if (!loaded) {
		return <SplashScreen />
	}

	return (
		<Provider>
			<FlashMessageWrapper />
			<Auth>
				<TouchableWithoutFeedback onPress={() => {
					if (showMenu) {
						setShowMenu(false);
					}
				}}>
					<SafeAreaProvider>
						<Stack screenOptions={{
							header: (navProps) => {
								return (
									<Header
										title={navProps.route.name}
										rightMenu={() => {
											return (
												<React.Fragment>
													{
														navProps.route.name === "index" ? (
															<TouchableOpacity onPress={() => navigateHandler("new_ticket")} style={{ marginHorizontal: 5 }}>
																<Icon family="fw" name="plus" size={HEADER_ICON_SIZE} color={theme.icons.dark_contrast} />
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
															<React.Fragment>
																{
																	routes.map((route, index) => {
																		const path = route.path === "index" ? "/" : route.path;

																		if (route.path == navProps.route.name) {
																			return null;
																		}
																		return (
																			<MenuOption
																				onPress={() => navigateHandler(path)}
																				key={`${route.name}-${route.path}-${index}`}
																			>
																				{route.name}
																			</MenuOption>
																		);
																	})
																}
																<CustomOptionsSection currentRoute={navProps.route.name} />
															</React.Fragment>
														</Menu>
													)}
												</React.Fragment>
											);
										}}
										leftMenu={() => {
											return (
												<React.Fragment>
													{
														navProps.route.name !== "index" ?
															<GoBackButton /> : <View style={{ width: HEADER_ICON_SIZE }} />
													}
													{
														navProps.route.name !== "login" &&
														navProps.route.name !== "register" &&
														navProps.route.name !== "new_ticket" &&
														<Calendar />
													}
												</React.Fragment>
											)
										}}
									/>
								);
							}
						}}>
							<Stack.Screen name="(auth)" options={{ headerShown: false,  }} />
						</Stack>
					</SafeAreaProvider>
				</TouchableWithoutFeedback>
			</Auth>
		</Provider>
	)
}
