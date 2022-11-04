import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

function PostCard(props) {
	return (
		<View style={styles.container}>
			<View style={styles.postContent}>
				<Text style={styles.postTitle}>Very interesting title</Text>
				<View style={styles.postImage}></View>
			</View>
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
		margin: 5,
		padding: 20,
		height: 120,
		width: "90%",
		borderRadius: 10,
		backgroundColor: Colors.red,
	},
	postContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	postTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	postImage: {
		height: 50,
		width: 50,
		backgroundColor: Colors.black,
	},
	postStats: {
		flexDirection: "row",
		alignItems: "center",
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
