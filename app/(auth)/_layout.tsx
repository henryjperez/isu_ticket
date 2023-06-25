import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, TouchableOpacity, View } from "react-native";
import { Stack, ErrorBoundary, SplashScreen, useRouter } from "expo-router";
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text, Header, Menu, MenuOption, MenuTrigger, GoBackButton, Icon, Calendar } from "@components";
import { HEADER_ICON_SIZE, routes } from "@utils";
import { useTheme } from "@hooks";


export default function AuthLayout() {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const theme = useTheme();


	return (
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
								leftMenu={() => {
									return (
										<React.Fragment>
											<GoBackButton />
										</React.Fragment>
									)
								}}
							/>
						);
					}
				}}>
					<Stack.Screen name="init" options={{ headerShown: false }} />
				</Stack>
			</SafeAreaProvider>
		</TouchableWithoutFeedback>
	)
}
