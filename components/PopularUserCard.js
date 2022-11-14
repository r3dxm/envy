import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

const PopularUserCard = ({ name, top_comment }) => {
	const navigation = useNavigation();
	name = name.toUpperCase();
	return (
		<TouchableOpacity
			onPress={() => navigation.replace("UserScreen")}
			style={styles.container}>
			<View style={styles.info}>
				<Image
					style={styles.infoImage}
					source={{ uri: "https://reactjs.org/logo-og.png" }}
				/>
				<Text style={styles.infoName}>{name}</Text>
			</View>
			<Text style={styles.topComment}>{top_comment}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		width: "97%",
		borderRadius: 15,
		backgroundColor: Colors.pastel_pink,
	},
	info: {
		flexDirection: "row",
		alignSelf: "center",
		alignItems: "center",
		width: "98%",
		height: 70,
		margin: 5,
		paddingLeft: 10,
		borderRadius: 15,
		backgroundColor: Colors.white,
	},
	infoImage: {
		width: 50,
		height: 50,
		borderRadius: 15,
	},
	infoName: {
		paddingLeft: 10,
		color: Colors.pastel_pink,
		fontWeight: "bold",
		fontSize: 18,
	},
	topComment: {
		color: Colors.white,
		paddingLeft: 20,
		marginBottom: 10,
	},
});
export default PopularUserCard;
