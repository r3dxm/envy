import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

function PostCard(props) {
	return (
		<View style={styles.container}>
			<View style={styles.postTitleContainer}>
				<Text style={styles.postTitle}>Very interesting title</Text>
			</View>
			<Text style={styles.postText}>
				this is a long text to see how the ui reacts to long texts and this
				should be very long to see the effects so im just going on.
			</Text>
			<View style={styles.postStats}>
				<View style={styles.likeContainer}>
					<AntDesign name="hearto" size={20} color={Colors.black} />
				</View>
				<Text style={styles.postStatsText}>1287</Text>
				<View style={styles.likeContainer}>
					<AntDesign name="message1" size={20} color={Colors.black} />
				</View>
				<Text style={styles.postStatsText}>69</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "98%",
		margin: 5,
		borderColor: Colors.pastel_pink,
		borderWidth: 2,
		borderRadius: 15,
		backgroundColor: Colors.white,
	},
	postTitleContainer: {
		width: "98%",
		marginTop: 5,
		justifyContent: "center",
		backgroundColor: Colors.pastel_pink,
		borderRadius: 15,
	},
	postTitle: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 10,
		color: Colors.white,
	},
	postText: {
		padding: 10,
		fontSize: 15,
	},
	postStats: {
		width: "98%",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 15,
		padding: 5,
		marginTop: 5,
		marginBottom: 5,
	},
	postStatsText: {
		margin: 10,
		fontWeight: "bold",
	},
	likeContainer: {
		backgroundColor: Colors.white,
		borderRadius: 100,
		padding: 7,
	},
});

export default PostCard;
