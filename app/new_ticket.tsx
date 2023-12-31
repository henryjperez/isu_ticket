import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useRouter } from "expo-router";

import { Icon, H2, Input, Button, FlashMessage, PopUpBackground, DatePicker } from "@components";
import { useStyles, useDatabase } from "@hooks";

const RegisterScreen = () => {
	const db = useDatabase();
	const router = useRouter();
	const [date, setDate] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [calendarVisible, setCalendarVisible] = useState(false);
	const [notification, setNotification] = useState<string | null>(null);

	function handleRegister() {
		db.transaction(tx => {
			tx.executeSql(
				`INSERT INTO tickets (name, date, longitude, latitude, phone, address) VALUES ('${name.trim()}', '${date}', 43.47660678006097, -80.48593148811405, '${phone}', '${address}');`,
				null,
				(txObject, resultSet) => {
					if (resultSet.insertId) {
						setNotification("Ticket Created successfully");
						setTimeout(() => {
							router.push("dashboard");
						}, 500);
					}
				},
				(txObject, err) => {
					setNotification("An error occurred");
					console.error(err)
				},
			);
		});
	}

	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			page: {
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: theme.body.background,
			},
		});
	})
	return (
		<React.Fragment>
			<ScrollView contentContainerStyle={styles.page}>
				{
					typeof notification === "string" && notification ?
						<FlashMessage message={notification} />
						: null
				}
				<Icon family='fw' name="ticket" size={50} />
				<H2>Create Ticket</H2>
				<Input placeholder='name' value={name} onChangeText={setName} />
				<Input placeholder='date' value={date} showSoftInputOnFocus={false} focusable={false} keyboardType="numeric" onPressIn={() => setCalendarVisible(!calendarVisible)} />
				<Input placeholder='address' value={address} onChangeText={setAddress} />
				<Input placeholder='phone' value={phone} onChangeText={setPhone} keyboardType="numeric" />
				<Button style={{ width: "80%", margin: 5, }} onPress={handleRegister}>Create</Button>
			</ScrollView>
			<PopUpBackground visible={calendarVisible} onPress={() => { if (calendarVisible) setCalendarVisible(false); }}>
				<DatePicker onSelect={(d) => { setDate(d); setCalendarVisible(false)}} date={date} />
			</PopUpBackground>
		</React.Fragment>
	)
}

export default RegisterScreen;