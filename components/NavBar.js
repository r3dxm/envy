import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

function NavBar(props) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback
				onPress={() => navigation.replace("SearchScreen")}>
				<AntDesign name="search1" size={32} color={Colors.white} />
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => navigation.replace("FeedScreen")}>
				<AntDesign name="home" size={32} color={Colors.white} />
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => navigation.replace("SettingsScreen")}>
				<AntDesign name="bars" size={40} color={Colors.white} />
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: Colors.black,
	},
});

export default NavBar;
