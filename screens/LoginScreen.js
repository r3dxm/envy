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
			<Text style={styles.logoTop}>ENVY</Text>
			<Text style={styles.logoBottom}>ENVY</Text>
			<TextInput placeholder="username" style={styles.input} />
			<TextInput
				placeholder="password"
				style={styles.input}
				secureTextEntry={true}
			/>
			<TouchableOpacity
				onPress={() => navigation.replace("FeedScreen")}
				style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.replace("FeedScreen")}
				style={styles.noAccountButton}>
				<Text style={styles.noAccountButtonText}>Give me an envy account</Text>
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
	logoTop: {
		margin: 0,
		marginTop: 150,
		padding: 0,
		fontSize: 96,
		fontWeight: "bold",
		color: Colors.logored,
	},
	logoBottom: {
		margin: -40,
		padding: 0,
		fontSize: 96,
		fontWeight: "bold",
		color: Colors.logoblue,
		transform: [{ rotate: "180deg" }],
	},
	input: {
		marginTop: 30,
		height: 50,
		width: "80%",
		paddingLeft: 20,
		borderRadius: 10,
		backgroundColor: Colors.grey,
		color: Colors.black,
	},
	loginButton: {
		marginTop: 20,
		height: 50,
		width: "80%",
		borderRadius: 10,
		backgroundColor: Colors.black,
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
