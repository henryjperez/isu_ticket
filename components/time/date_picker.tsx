import { View, Text } from 'react-native'
import { Calendar } from "react-native-calendars";

export interface DatePickerProps {
	onSelect: (date: Date | String) => void;
}
export const DatePicker = (props: DatePickerProps) => {
	return (
		<View>
			<Calendar />
		</View>
	)
}