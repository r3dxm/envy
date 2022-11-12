import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../libraries/Colors";
import Entypo from "@expo/vector-icons/Entypo";

function NavBar(props) {
	return (
		<View style={styles.container}>
			<Entypo name="home" size={32} color={Colors.white} />
			<Entypo name="magnifying-glass" size={32} color={Colors.white} />
			<Entypo name="menu" size={40} color={Colors.white} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: Colors.black,
	},
});

export default NavBar;
