import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";

function UserCard(props) {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<View style={styles.profilePicture}></View>
				<Text style={styles.profileName}>RandomUser</Text>
			</View>
			<Text style={styles.profileStats}>120k followers @instagram</Text>
			<Text style={styles.profileStats}>2.2m envy rating</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "98%",
		marginTop: 20,
		borderRadius: 10,
		backgroundColor: Colors.pastel_pink,
		padding: 5,
	},
	profile: {
		height: 70,
		widht: "80%",
		borderRadius: 15,
		paddingLeft: 10,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.white,
	},
	profilePicture: {
		height: 50,
		width: 50,
		borderRadius: 15,
		backgroundColor: Colors.black,
	},
	profileName: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.pastel_pink,
		paddingLeft: 10,
	},
	profileStats: {
		paddingLeft: 15,
		marginTop: 5,
		marginBottom: 5,
		color: Colors.white,
		fontSize: 14,
	},
});

export default UserCard;
