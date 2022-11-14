import React from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Text,
} from "react-native";
import Search from "../components/Search";
import UserCard from "../components/UserCard";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Colors from "../libraries/Colors";

function UserScreen(props) {
	return (
		<View style={styles.container}>
			<Header />
			<ScrollView
				style={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
				decelerationRate={0.95}>
				<View style={styles.scrollContainerInterior}>
					<UserCard />
					<TouchableOpacity style={styles.newPostButton}>
						<Text style={styles.newPostButtonText}>create new post</Text>
					</TouchableOpacity>
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
			<NavBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: Colors.white,
	},
	newPostButton: {
		height: 50,
		width: "40%",
		alignSelf: "flex-start",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		borderWidth: 2,
		borderColor: Colors.black,
		margin: 10,
		backgroundColor: Colors.white,
	},
	scrollContainer: {
		width: "100%",
	},
	scrollContainerInterior: {
		alignItems: "center",
	},
});

export default UserScreen;
