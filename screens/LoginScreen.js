import React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../libraries/Colors";

function LoginScreen(props) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>ENVY</Text>
			<TextInput
				placeholder="phone number"
				placeholderTextColor={Colors.pastel_pink}
				style={styles.input}
			/>
			<TextInput
				placeholder="confirm phone number"
				placeholderTextColor={Colors.pastel_pink}
				style={styles.input}
			/>
			<TouchableOpacity
				onPress={() => navigation.replace("FeedScreen")}
				style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Send me the login link</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		alignItems: "center",
		backgroundColor: Colors.white,
	},
	logo: {
		marginTop: 120,
		marginBottom: 50,
		padding: 0,
		fontSize: 150,
		fontWeight: "bold",
		color: Colors.black,
		transform: [{ rotate: "90deg" }],
	},
	input: {
		marginTop: 20,
		height: 50,
		width: "80%",
		paddingLeft: 20,
		borderRadius: 10,
		backgroundColor: Colors.white,
		color: Colors.pastel_pink,
		fontWeight: "bold",
		fontSize: 15,
	},
	loginButton: {
		marginTop: 20,
		height: 50,
		width: "80%",
		borderRadius: 10,
		backgroundColor: Colors.pastel_pink,
		alignItems: "center",
		justifyContent: "center",
	},
	loginButtonText: {
		color: Colors.white,
		fontSize: 20,
		fontWeight: "bold",
	},
	noAccountButton: {
		marginTop: 30,
		height: 50,
		width: "80%",
		borderRadius: 10,
		backgroundColor: Colors.white,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default LoginScreen;
