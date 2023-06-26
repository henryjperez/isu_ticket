import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useSearchParams } from "expo-router";
// to use the google maps api to draw directions in the map
// use this library "react-native-maps-directions" but it need an API KEY of Google

import { useStyles, useAppSelector } from "@hooks";
import { isEmptyObject } from "@utils";

const Directions = () => {
	const [origin, setOrigin] = useState({ latitude: 43.47660678006097, longitude: -80.48593148811405, });
	const [destination, setDestination] = useState({ latitude: 43.44556211523661, longitude: -80.57963233187134 });
	const { latitude, longitude } = useSearchParams();
	const selectedTickets = useAppSelector(state => state.tickets.selected);

	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			map: {
				width: "100%",
				height: "100%",
			},
			container: {
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			},
		});
	})
	
	useEffect(() => {
		if (isEmptyObject(selectedTickets)) {
			// @ts-ignore
			setDestination({latitude, longitude});
		} else {
			const arrayTickets = Object.keys(selectedTickets).map((key) => selectedTickets[key]);
			if (arrayTickets.length > 0) {
				setDestination({ latitude: arrayTickets?.[0]?.latitude, longitude: arrayTickets?.[0]?.longitude });
			}
		}
	}, []);
	
	return (
		<View style={styles.container}>
			<MapView
				initialRegion={{
					...origin,
					latitudeDelta: 0.09,
					longitudeDelta: 0.04,
				}}
				style={styles.map}
			>
				<Marker
					draggable
					coordinate={origin}
					onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
				/>
				<Marker
					draggable
					coordinate={destination}
					onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
					pinColor="blue"
				/>
				<Polyline
					coordinates={[origin, destination]}
					strokeWidth={5}	
					strokeColor="black"
				/>
			</MapView>
		</View>
	)
}

export default Directions;