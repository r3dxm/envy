import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Search from "../components/Search";
import UserCard from "../components/UserCard";
import PostCard from "../components/PostCard";

function UserScreen(props) {
	return (
		<View style={styles.container}>
			<Search text="user" />
			<UserCard />
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.scrollContainerInterior}>
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		alignItems: "center",
	},
	scrollContainer: {
		width: "100%",
	},
	scrollContainerInterior: {
		alignItems: "center",
	},
});

export default UserScreen;
