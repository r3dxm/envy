import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Header(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>ENVY</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		borderColor: Colors.black,
		borderTopColor: Colors.white,
		borderWidth: 2,
		justifyContent: "center",
		paddingLeft: 20,
	},
	logo: {
		fontWeight: "900",
		fontSize: 32,
	},
});

export default Header;
