import React from 'react';
import { useRouter } from "expo-router";

import { MenuOption } from "./menu_option";
import { LogoutMenuOption } from "./logout_menu_option";
import { useAppSelector, useAppDispatch } from "@hooks";
import { isEmptyObject } from "@utils";
import { selectTicketMode, resetTicketsSelected } from "@actions";

export interface CustomOptionsSectionProps {
	currentRoute: string;
}
export const CustomOptionsSection = ({ currentRoute }: CustomOptionsSectionProps) => {
	const { selected, selectMode } = useAppSelector(state => state.tickets);
	const dispatch = useAppDispatch();
	const router = useRouter();

	function handleNavigateSelect(route: string) {
		{
			if (currentRoute === "index") {
				if (isEmptyObject(selected)) {
					if (!selectMode) {
						dispatch(selectTicketMode(true));
					}
				} else {
					router.push(route);
					dispatch(selectTicketMode(false));
				}
			}
		}
	}

	return (
		<React.Fragment>
			{
				currentRoute !== "index" ? (
					<MenuOption onPress={() => {
						dispatch(resetTicketsSelected());
						router.replace("/");
					}}>
						Dashboard
					</MenuOption>
				) : null
			}
			{
				currentRoute !== "work" ? (
					<MenuOption onPress={() => handleNavigateSelect("work")}>
						Work
					</MenuOption>
				) : null
			}
			{
				currentRoute !== "directions" ? (
					<MenuOption onPress={() => handleNavigateSelect("directions")}>
						Get Directions
					</MenuOption>
				) : null
			}
			<LogoutMenuOption />
		</React.Fragment>
	)
}
