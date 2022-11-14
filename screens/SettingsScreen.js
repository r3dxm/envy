import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../libraries/Colors";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function SettingsScreen(props) {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<TouchableOpacity style={styles.settingButton}>
					<Text style={styles.settingButtonText}>Logout</Text>
				</TouchableOpacity>
			</View>
			<NavBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: Colors.white,
	},
	content: {
		flex: 1,
		alignItems: "center",
	},
	settingButton: {
		width: "98%",
		height: 50,
		borderRadius: 15,
		margin: 5,
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: Colors.grey,
	},
	settingButtonText: {
		paddingLeft: 20,
	},
});

export default SettingsScreen;
