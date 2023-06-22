import { View, StyleSheet } from 'react-native'
import { Calendar } from "react-native-calendars";

import { useStyles } from "@hooks";

export interface DatePickerProps {
	onSelect: (date: string) => void;
	date: string;
}
export const DatePicker = (props: DatePickerProps) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				borderRadius: 10,
				width: 300,
			}
		});
	})
	return (
		<View>
			<Calendar
				onDayPress={(date) => props.onSelect(date.dateString)}
				style={styles.container}
				initialDate={props.date}
				current={props.date}
				date={props.date}
				/>
		</View>
	)
}