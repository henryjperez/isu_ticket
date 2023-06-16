import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Button } from "@components/button";
import { Text, H1, } from "@components/text";
import { Card } from "@components/card";

export const WorkTicket = () => {
	return (
		<Card>
			<View>
				<H1>Ticket #2</H1>
			</View>
			<View>
				<Card>
					<Button>Get Directions</Button>
				</Card>
				<Card>
					<Button>Get Directions</Button>
				</Card>
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({});