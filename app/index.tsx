import { StyleSheet, Text, View } from 'react-native';

import { Button, Icon, Input } from "@components";

const Entry = () => {
	return (
		<View>
			<Text>Entry</Text>
			<Button>Peter</Button>
			<Icon family='material' size={42} name='addchart' />
			<Input secureTextEntry />
		</View>
	)
}

export default Entry;

const styles = StyleSheet.create({});