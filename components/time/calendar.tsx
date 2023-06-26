import React, { useEffect } from "react";
import { View, TouchableOpacity, Platform } from 'react-native';
import * as ExpoCalendar from 'expo-calendar';
import { Agenda, Calendar as RNCalendar } from "react-native-calendars";

import { Text, Icon } from "@components/text";
import { PopUpBackground } from "@components/pop_up";
import { DatePicker } from "./date_picker";
import { HEADER_ICON_SIZE } from "@utils";

export interface CalendarProps {

}
export async function requestCalendarPermission() {
	const { status } = await ExpoCalendar.requestCalendarPermissionsAsync();
	if (status === 'granted') {
		const calendars = await ExpoCalendar.getCalendarsAsync(ExpoCalendar.EntityTypes.EVENT);
		console.log('Here are all your calendars:');
		console.log(calendars[10]);
	}
}
export const Calendar = (props: CalendarProps) => {

	useEffect(() => {
		requestCalendarPermission();
	}, []);

	
	async function getDefaultCalendarSource() {
		const defaultCalendar = await ExpoCalendar.getDefaultCalendarAsync();
		return defaultCalendar.source;
	}
	async function createCalendar() {
		const defaultCalendarSource =
			Platform.OS === 'ios'
				? await getDefaultCalendarSource()
				: { isLocalAccount: true, name: 'Expo Calendar' };
		const newCalendarID = await ExpoCalendar.createCalendarAsync({
			title: 'Expo Calendar',
			color: 'blue',
			entityType: ExpoCalendar.EntityTypes.EVENT,
			sourceId: defaultCalendarSource.id,
			source: defaultCalendarSource,
			name: 'internalCalendarName',
			ownerAccount: 'personal',
			accessLevel: ExpoCalendar.CalendarAccessLevel.OWNER,
		});
		console.log(`Your new calendar ID is: ${newCalendarID}`, defaultCalendarSource);
	}

	return (
		<React.Fragment>
			<TouchableOpacity onPress={createCalendar}>
				<Icon family="fw" name="calendar" size={HEADER_ICON_SIZE} />
			</TouchableOpacity>
			{/* <PopUpBackground press={{ action: () => {}, visible: true, styles: true, }}>
				<DatePicker />
			</PopUpBackground> */}
		</React.Fragment>
	)
}