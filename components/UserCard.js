import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";

function UserCard(props) {
	return (
		<View style={styles.container}>
			<View style={styles.profilePicture}></View>
			<Text style={styles.profileName}>RandomUser</Text>
			<Text style={styles.profileStats}>120k followers @instagram</Text>
			<Text style={styles.profileStats}>2.2m envy rating</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 175,
		width: "90%",
		borderRadius: 10,
		backgroundColor: Colors.white,
		padding: 20,
	},
	profilePicture: {
		height: 70,
		width: 70,
		borderRadius: 100,
		backgroundColor: Colors.black,
	},
	profileName: {
		fontSize: 32,
		fontWeight: "bold",
	},
});

export default UserCard;
