import { StyleSheet, Text, View } from 'react-native';

import { Button, Icon } from "@components";

const Entry = () => {
	return (
		<View>
			<Text>Entry</Text>
			<Button>Peter</Button>
			<Icon family='material' size={42} name='addchart' />
		</View>
	)
}

export default Entry;

const styles = StyleSheet.create({});