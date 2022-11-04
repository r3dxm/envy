import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../libraries/Colors";

const CommenCard = ({ name, num_posts, num_comments }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.cardTextArea}>
				<Text style={styles.cardTextName}>{name}</Text>
				<Text style={styles.cardText}>{num_posts} posts today</Text>
				<Text style={styles.cardText}>{num_comments} comments today</Text>
			</View>
			<Image
				style={styles.cardImage}
				source={{ uri: "https://reactjs.org/logo-og.png" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		borderRadius: 10,
		// width: "80%",
		width: "90%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: Colors.red,
		margin: 5,
	},
	cardTextArea: {
		paddingBottom: 10,
		paddingTop: 10,
		paddingLeft: 10,
	},

	cardTextName: {
		backgroundColor: Colors.white,
		padding: 5,
		fontSize: 20,
		borderRadius: 10,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 30,
	},
	cardText: {
		// padding: 2,
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.white,
	},
	cardImage: {
		width: 100,
		height: 100,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 10,
	},
});
export default CommentCard;
